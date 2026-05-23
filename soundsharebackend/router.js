
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, 'uploads'));
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

const upload = multer({ storage });
// const controller = require('./controller');
const posts = require('./controllers/post');
const users = require('./controllers/users');


// router.get('/users', controller.getUsers);
// router.post('/createuser', controller.addUser);
// router.post('/updateuser', controller.updateUser);
// router.post('/deleteuser', controller.deleteUser);


router.get('/post', posts.getPosts);
router.post('/createpost', upload.fields([{ name: 'selectedMFile' }, { name: 'selectedPFile' }]), posts.createPost);
router.patch('/updatepost/:id', upload.fields([{ name: 'selectedMFile' }, { name: 'selectedPFile' }]), posts.updatePost);
router.delete('/posts/:id', posts.deletePost);
router.get('/ownpost/:creator', posts.getPostsByCreator);


router.get('/user', users.getUsers);
router.post('/createuser', upload.single('profilePicture'), users.createUser);
router.post('/login', users.loginUser);
router.post('/fetchme', users.fetchMe);
router.patch('/updateuser/:id', upload.single('profilePicture'), users.updateUser);
router.delete('/users/:id', users.deleteUser);

module.exports = router;