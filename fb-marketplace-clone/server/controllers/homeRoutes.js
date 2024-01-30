const router = require('express').Router();
const Products = require('../models/Products');
const User = require('../models/Users');
const Transactions = require('../models/Transactions');

router.get('/', async (req, res) => {
    try {
        const productData = await Products.find().populate('seller');
        const products = productData.map((product) => product.get({ plain: true }));
        res.render('homepage', {
        products,
        loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/product/:id', async (req, res) => {
    try {
        const productData = await Products.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const product = productData.get({ plain: true });
        res.render('product', {
            ...product,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});