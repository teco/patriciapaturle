# 📧 EmailJS Setup Guide

This guide will help you set up EmailJS for the registration form to send personalized access emails.

## 🚀 Quick Start

### 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template configuration:

**Template Name:** `lab_academy_access`

**Subject:** `🎓 Seu acesso à aula: Bloqueio Anestésico Labial`

**Content (HTML):**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .access-code {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin: 20px 0;
            border: 2px solid #667eea;
        }
        .code {
            font-size: 28px;
            font-weight: bold;
            color: #667eea;
            letter-spacing: 3px;
        }
        .button {
            display: inline-block;
            padding: 15px 40px;
            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>LAB ACADEMY</h1>
            <h2>Bem-vindo(a), {{to_name}}! 🎓</h2>
        </div>
        <div class="content">
            <p>Olá <strong>{{to_name}}</strong>,</p>

            <p>Parabéns! Sua inscrição foi confirmada com sucesso.</p>

            <p>Você agora tem acesso à aula bônus:</p>
            <h3 style="color: #667eea; text-align: center;">Bloqueio Anestésico Labial<br>Demonstração Prática Comentada</h3>

            <div class="access-code">
                <p style="margin: 0; font-size: 14px; color: #666;">Seu código de acesso:</p>
                <p class="code">{{access_code}}</p>
            </div>

            <div style="text-align: center;">
                <a href="{{video_url}}" class="button">▶️ ASSISTIR AGORA</a>
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

            <h4>📋 Seus dados de inscrição:</h4>
            <ul style="list-style: none; padding-left: 0;">
                <li>✉️ Email: {{to_email}}</li>
                <li>📱 WhatsApp: {{whatsapp}}</li>
                <li>📊 Experiência: {{experience}}</li>
            </ul>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

            <h4>💡 Sobre a aula:</h4>
            <p>Esta aula bônus faz parte do <strong>Programa Online de Imersão em Lábios</strong> e traz uma demonstração prática sobre bloqueio anestésico labial com anatomia aplicada à prática clínica.</p>

            <p><strong>O que você vai aprender:</strong></p>
            <ul>
                <li>Anatomia detalhada dos nervos faciais</li>
                <li>Técnicas de bloqueio anestésico</li>
                <li>Pontos anatômicos de referência</li>
                <li>Protocolos de dosagem</li>
                <li>Prevenção de complicações</li>
            </ul>

            <p style="margin-top: 30px;">Se você tiver alguma dúvida, responda este email ou entre em contato pelo WhatsApp.</p>

            <p><strong>Bons estudos! 📚</strong></p>
        </div>
        <div class="footer">
            <p>LAB Academy - Programa Online de Imersão em Lábios</p>
            <p>Dra. Patricia Paturle</p>
        </div>
    </div>
</body>
</html>
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123xyz789`)
3. Copy it

### 5. Update the HTML Files

Open `inscricao.html` and replace these placeholders:

**Line 408:** Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key
```

**Line 517-518:** Replace with your Service ID and Template ID
```javascript
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```

**Example:**
```javascript
// Initialize EmailJS
emailjs.init('abc123xyz789');

// ...later in the code...
await emailjs.send('service_abc123', 'template_xyz789', {
```

### 6. Template Variables

The template uses these variables (automatically filled by the form):

- `{{to_email}}` - User's email address
- `{{to_name}}` - User's full name
- `{{access_code}}` - Generated 8-character access code
- `{{video_url}}` - Direct link to video page with access code
- `{{whatsapp}}` - User's WhatsApp number
- `{{experience}}` - User's experience level

### 7. Test the Form

1. Open `inscricao.html` in your browser
2. Fill out the form with test data
3. Submit and check:
   - Email should arrive at the test email address
   - Should redirect to `/aula.html?code=XXXXXXXX`
   - Video page should display with valid access code

## 🎨 Customization Options

### Change Email Template Design

Edit the HTML in your EmailJS template to match your branding.

### Add More Form Fields

1. Add the field to `inscricao.html`
2. Update the `formData` object in the submit handler
3. Add the variable to the EmailJS template

### Change Access Code Format

In `inscricao.html`, find the `generateAccessCode()` function:

```javascript
function generateAccessCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 8; i++) { // Change length here
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
```

## 🔒 Security Notes

1. **Never commit your EmailJS keys to public repositories**
2. EmailJS free tier has rate limits (200 emails/month)
3. For production, consider upgrading to a paid plan
4. Access codes are stored in browser localStorage (client-side only)

## 🚀 Going to Production

### Option 1: Use EmailJS (Current Setup)
- Pros: Simple, no backend needed
- Cons: 200 emails/month on free tier, client-side only

### Option 2: Netlify Functions (Recommended for Production)
- Pros: Serverless, secure, can store data
- Cons: Requires backend setup
- See: `SETUP_NETLIFY.md` (if you want to upgrade later)

### Option 3: Custom Backend
- Set up a Node.js/Python backend
- Use Nodemailer or SendGrid
- Store registrations in a database

## 📊 Tracking Registrations

Currently, registrations are not stored permanently. To track them:

1. **Google Sheets Integration**: Use Google Apps Script
2. **Airtable**: Use Airtable API
3. **Database**: Set up a backend with database
4. **EmailJS Dashboard**: Check sent emails (limited history)

## ❓ Troubleshooting

### Email not sending?
- Check your EmailJS service is connected
- Verify Service ID, Template ID, and Public Key
- Check browser console for errors
- Verify email service limits

### Access code not working?
- Check browser localStorage
- Try clearing localStorage and re-submitting
- Check URL format: `/aula.html?code=XXXXXXXX`

### Formatting issues?
- Test with different email clients (Gmail, Outlook)
- Use HTML email validators
- Keep design simple for better compatibility

## 📞 Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Ready to go live?** Just update the three values in `inscricao.html` and you're done! 🎉
