
const { pool, toPost } = require('../database');

const getPosts = async (req, res, next) => {
    try {
        const { rows } = await pool.query('SELECT * FROM posts ORDER BY id DESC');
        res.status(200).json(rows.map(toPost));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPost = async (req, res, next) => {
    const { title, caption, creator } = req.body;

    // files uploaded by multer
    const mfile = req.files && req.files['selectedMFile'] ? req.files['selectedMFile'][0] : null;
    const pfile = req.files && req.files['selectedPFile'] ? req.files['selectedPFile'][0] : null;

    const selectedMFile = mfile ? `/uploads/${mfile.filename}` : '';
    const selectedPFile = pfile ? `/uploads/${pfile.filename}` : '';

    try {
        const { rows } = await pool.query(
            `INSERT INTO posts (title, caption, creator, selected_m_file, selected_p_file)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [title, caption, creator, selectedMFile, selectedPFile]
        );

        res.status(201).json(toPost(rows[0]));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePost = async (req, res, next) => {
    const id = Number(req.params.id);
    const { title, caption, creator } = req.body;

    const mfile = req.files && req.files['selectedMFile'] ? req.files['selectedMFile'][0] : null;
    const pfile = req.files && req.files['selectedPFile'] ? req.files['selectedPFile'][0] : null;

    const selectedMFile = mfile ? `/uploads/${mfile.filename}` : undefined;
    const selectedPFile = pfile ? `/uploads/${pfile.filename}` : undefined;

    try {
        const { rows } = await pool.query(
            `UPDATE posts
             SET title = COALESCE($1, title),
                 caption = COALESCE($2, caption),
                 creator = COALESCE($3, creator),
                 selected_m_file = COALESCE($4, selected_m_file),
                 selected_p_file = COALESCE($5, selected_p_file)
             WHERE id = $6
             RETURNING *`,
            [title, caption, creator, selectedMFile, selectedPFile, id]
        );

        if (!rows.length) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.status(200).json(toPost(rows[0]));
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deletePost = async (req, res, next) => {
    const id = Number(req.params.id);

    try {
        const { rowCount } = await pool.query('DELETE FROM posts WHERE id = $1', [id]);

        if (!rowCount) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getPostsByCreator = async (req, res, next) => {
    const { creator } = req.params;

    try {
        const { rows } = await pool.query('SELECT * FROM posts WHERE creator = $1 ORDER BY id DESC', [creator]);
        return res.status(200).json(rows.map(toPost));
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getPosts = getPosts;
exports.createPost = createPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.getPostsByCreator = getPostsByCreator;