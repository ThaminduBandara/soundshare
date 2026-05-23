
const { pool, toUser } = require('../database');

const getUsers = async (req, res, next) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users ORDER BY id DESC');
        res.status(200).json(rows.map(toUser));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res, next) => {
    const username = req.body.username || req.body.name;
    const name = req.body.name || username;
    const email = req.body.email;
    const password = req.body.password;
    // multer single('profilePicture') will populate req.file
    const file = req.file;
    const profilePicture = file ? `/uploads/${file.filename}` : (req.body.profilePicture || '');
    const bio = req.body.bio || '';

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'username, email, and password are required' });
    }

    try {
        const { rows } = await pool.query(
            `INSERT INTO users (username, name, email, password, profile_picture, bio)
             VALUES ($1, $2, $3, $4, $5, $6)
             RETURNING *`,
            [username, name, email, password, profilePicture, bio]
        );

        res.status(201).json(toUser(rows[0]));
    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({ message: 'A user with that email or username already exists' });
        }

        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'email and password are required' });
    }

    try {
        const { rows } = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2 LIMIT 1',
            [email, password]
        );

        if (!rows.length) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        return res.status(200).json({ user: toUser(rows[0]) });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const fetchMe = loginUser;

const updateUser = async (req, res, next) => {
    const id = Number(req.params.id);
    const file = req.file;
    const { username, name, email, password, bio } = req.body;
    const profilePicture = file ? `/uploads/${file.filename}` : req.body.profilePicture;

    try {
        const { rows } = await pool.query(
            `UPDATE users
             SET username = COALESCE($1, username),
                 name = COALESCE($2, name),
                 email = COALESCE($3, email),
                 password = COALESCE($4, password),
                 profile_picture = COALESCE($5, profile_picture),
                 bio = COALESCE($6, bio)
             WHERE id = $7
             RETURNING *`,
            [username, name, email, password, profilePicture, bio, id]
        );

        if (!rows.length) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(toUser(rows[0]));
    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({ message: 'A user with that email or username already exists' });
        }

        return res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res, next) => {
    const id = Number(req.params.id);

    try {
        const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1', [id]);

        if (!rowCount) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.loginUser = loginUser;
exports.fetchMe = fetchMe;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;