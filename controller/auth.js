const express = require('express');
const User = require('../models/user.js')
module.exports.profile = function(req, res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function (err, user){
            if(err){
                return console.log('Error in finding user (profile)');
            }
            if(user){
                return res.render('user_profile', {
                    title: 'User Profile',
                    user:user
                });
            }
        });
    }
    else{
        return res.redirect('/auth/sign_in');
    }
}
module.exports.sign_in = function (req, res){
    return res.render('user_sign_in.ejs');
};
module.exports.sign_up = function (req, res){
    return res.render('user_sign_up.ejs');
};
// signup data
module.exports.create = function (req, res) {
    if(req.body.password!=req.body.confirm_password){
        console.log('Password not matching');
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            return console.log('Error in finding the user');
        }
        if(!user){
            // User.create({name: req.body.name, email: req.body.email,  password: req.body.password}, function(err){});
            User.create(req.body, function(err){
                if(err){
                    return console.log('Error in creating the user', err);
                }
                return res.redirect('/auth/sign_in');
            });
        }
        else{
            return res.redirect('back');
        }
    })
}
// signin data
module.exports.createSession = function (req, res) {
    // Steps to authenticate
    // find the user
    User.findOne({email: req.body.email}, function (err, user){
        if(err){return console.log('Error in finding user (create session)')}
        // handle user found
        if(user){
            // if password don't match
            if(req.body.password != user.password){
                // alert('Password is incorrect');
                // U CAN'T USE ALERT IN POST
                console.log('Password is incorrect');
                return res.redirect('/auth/sign_in');
            }
            // handle create session
            res.cookie('user_id',user.id);
            return res.redirect('/auth/profile');
        }
        else{
            return res.redirect('back');
        }
    });
}