# 📋 Sistema de Registro e Acesso à Aula Bônus

Sistema de formulário de inscrição com envio automático de email e controle de acesso para a aula "Bloqueio Anestésico Labial" da LAB Academy.

## 🎯 Funcionalidades Implementadas

### ✅ Página de Inscrição (`/inscricao.html`)

**Campos do Formulário:**
1. ✅ Nome completo (obrigatório)
2. ✅ Email (obrigatório, validação de formato)
3. ✅ WhatsApp com DDD (obrigatório, formatação automática `(00) 00000-0000`)
4. ✅ Nível de experiência com preenchimento labial (obrigatório, 4 opções)
5. ✅ Autorização para receber conteúdos (obrigatório, checkbox)

**Validações:**
- ✅ Validação em tempo real de todos os campos
- ✅ Mensagens de erro personalizadas
- ✅ Formatação automática do WhatsApp
- ✅ Validação de email com regex
- ✅ Campos obrigatórios marcados com asterisco

**Design:**
- ✅ Header com gradiente roxo (LAB ACADEMY + AULA BÔNUS)
- ✅ Placeholder para imagem do procedimento
- ✅ Design responsivo (mobile-friendly)
- ✅ Botão verde "Enviar"
- ✅ Feedback visual de erros
- ✅ Loading state durante envio

### ✅ Página da Aula (`/aula.html`)

**Controle de Acesso:**
- ✅ Verificação de código de acesso via URL (`?code=XXXXXXXX`)
- ✅ Validação usando localStorage
- ✅ Mensagem de "Acesso Negado" para códigos inválidos
- ✅ Botão para voltar à inscrição

**Conteúdo:**
- ✅ Exibição do código de acesso
- ✅ Container para vídeo (YouTube, Vimeo ou custom)
- ✅ Seção "O que você vai aprender" (6 tópicos)
- ✅ Seção "Sobre a Aula"
- ✅ CTA para programa completo
- ✅ Design dark mode elegante

### ✅ Integração EmailJS

**Funcionalidades:**
- ✅ Envio automático de email após inscrição
- ✅ Geração de código de acesso único (8 caracteres)
- ✅ Email personalizado com:
  - Nome do usuário
  - Código de acesso
  - Link direto para aula
  - Dados da inscrição
  - Informações sobre o conteúdo
- ✅ Template HTML profissional com design responsivo

## 🚀 Como Usar

### 1. Configurar EmailJS

Siga o guia detalhado em [`SETUP_EMAILJS.md`](SETUP_EMAILJS.md):

1. Criar conta no EmailJS
2. Configurar serviço de email
3. Criar template de email
4. Obter Public Key, Service ID e Template ID
5. Atualizar `inscricao.html` com suas credenciais

### 2. Adicionar Vídeo

Edite `aula.html` e descomente uma das opções:

**YouTube:**
```html
<iframe
  src="https://www.youtube.com/embed/SEU_VIDEO_ID"
  title="Bloqueio Anestésico Labial"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

**Vimeo:**
```html
<iframe
  src="https://player.vimeo.com/video/SEU_VIDEO_ID"
  title="Bloqueio Anestésico Labial"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen>
</iframe>
```

### 3. Adicionar Imagem do Header

Opções para adicionar a imagem do header em `inscricao.html`:

**Opção A: Usar arquivo local**
```html
<!-- Substitua a div .header-image por: -->
<img src="/caminho/para/imagem-header.jpg" alt="Bloqueio Anestésico Labial" style="width: 100%; border-radius: 12px;" />
```

**Opção B: Usar URL externa**
```html
<img src="https://exemplo.com/imagem-header.jpg" alt="Bloqueio Anestésico Labial" style="width: 100%; border-radius: 12px;" />
```

### 4. Deploy

Após configurar, faça commit e push:

```bash
git add inscricao.html aula.html SETUP_EMAILJS.md README_FORMULARIO.md
git commit -m "Add registration form and video page with EmailJS integration"
git push -u origin claude/review-gh-pages-website-BPgYR
```

O site estará disponível em:
- **Formulário:** `https://patriciapaturle.com.br/inscricao.html`
- **Aula:** `https://patriciapaturle.com.br/aula.html?code=XXXXXXXX`

## 📊 Fluxo do Usuário

```
1. Usuário acessa /inscricao.html
   ↓
2. Preenche o formulário
   ↓
3. Formulário valida os dados
   ↓
4. Gera código de acesso único (ex: A7K9M2P5)
   ↓
5. Envia email via EmailJS com:
   - Código de acesso
   - Link direto: /aula.html?code=A7K9M2P5
   - Informações da inscrição
   ↓
6. Salva código no localStorage
   ↓
7. Redireciona para /aula.html?code=A7K9M2P5
   ↓
8. Valida código e exibe conteúdo da aula
```

## 🎨 Personalização

### Cores e Estilos

**Gradiente do Header (inscricao.html):**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Botão de Envio:**
```css
background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
```

**Fundo da Página:**
```css
background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
```

### Textos

Todos os textos podem ser editados diretamente nos arquivos HTML:
- Títulos
- Descrições
- Mensagens de erro
- Conteúdo da aula
- CTAs

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Gradientes, animações, responsividade
- **JavaScript (Vanilla)**: Lógica do formulário e validações
- **EmailJS**: Envio de emails sem backend
- **LocalStorage**: Controle de acesso

## 📱 Responsividade

Ambas as páginas são totalmente responsivas:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

## 🔒 Segurança e Limitações

### Segurança
- ✅ Validação client-side de todos os campos
- ✅ Sanitização de inputs
- ⚠️ Códigos de acesso armazenados apenas no navegador (localStorage)
- ⚠️ Não há validação server-side (frontend only)

### Limitações
- EmailJS free tier: 200 emails/mês
- Códigos de acesso podem ser compartilhados
- Sem persistência de dados em banco de dados
- Sem analytics integrado

### Melhorias Futuras (Opcional)
1. **Backend**: Adicionar validação server-side
2. **Database**: Armazenar inscrições em banco de dados
3. **Analytics**: Integrar Google Analytics ou similar
4. **Anti-spam**: Adicionar reCAPTCHA
5. **Expiration**: Códigos de acesso com validade

## 📞 Suporte

Para dúvidas sobre:
- **EmailJS**: Ver `SETUP_EMAILJS.md`
- **Customização**: Editar arquivos HTML/CSS diretamente
- **Deploy**: Ver documentação do GitHub Pages

## ✅ Checklist de Deploy

- [ ] Configurar conta EmailJS
- [ ] Criar template de email no EmailJS
- [ ] Atualizar credenciais em `inscricao.html` (Public Key, Service ID, Template ID)
- [ ] Adicionar vídeo em `aula.html`
- [ ] Adicionar imagem do header em `inscricao.html` (opcional)
- [ ] Testar formulário localmente
- [ ] Testar envio de email
- [ ] Testar acesso à página da aula
- [ ] Commit e push para o branch
- [ ] Merge para gh-pages (se aplicável)
- [ ] Verificar URLs em produção
- [ ] Testar em diferentes dispositivos
- [ ] Compartilhar link de inscrição

---

**Status:** ✅ Implementação concluída e pronta para configuração do EmailJS!

**Próximos passos:**
1. Configure o EmailJS seguindo o guia `SETUP_EMAILJS.md`
2. Adicione o vídeo da aula
3. (Opcional) Adicione a imagem do header
4. Teste e faça deploy!
