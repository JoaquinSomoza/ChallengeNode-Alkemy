module.exports=({env})=>({
    email:{
        config:{
            provider: 'sendgrid',
            providerOptions: {
                apikey:env('SENGRID_API_KEY'),
            },
            settings:{
                defaultFrom:'joaquinsomoza6@gmail.com',
                defaultReplyTo:'joaquinsomoza6@gmail.com',
            },
        },
    },
});