# Portfólio — Luís Eduardo Carvalho Ferreira

> Site de portfólio pessoal desenvolvido para apresentar projetos, habilidades técnicas e trajetória profissional a recrutadores e tech leads.

**[🌐 Ver ao vivo](https://portifolio-website-hub.vercel.app)**  &nbsp;·&nbsp;  **[GitHub](https://github.com/LuisEdu17y)**  &nbsp;·&nbsp;  **[LinkedIn](https://linkedin.com/in/lu%C3%ADs-eduardo-00a685359)**

---

## Sobre o projeto

Portfólio profissional com design dark moderno, responsivo e acessível, focado em empregabilidade para vagas de estágio em Desenvolvimento Web, Back-End Python e áreas correlatas de TI.

O design é inspirado em Vercel, Linear, Stripe e Raycast — minimalista, tipografia forte, fundo escuro elegante. Construído com HTML/CSS/JS puro, sem framework de build.

---

## Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com typed text animado, code window Python interativa e stats bar com contador animado |
| **Sobre** | Storytelling profissional, achievement cards, GitHub Stats e tecnologias em aprendizado |
| **Skills** | Grid de 16 tecnologias com ícones, níveis de proficiência (Dominando/Usando/Praticando), GitHub Streak e Top Languages |
| **Projetos** | Conecta Bairro (destaque + diagrama de arquitetura) + Controle de Caixa Pro + Projeto Integrador |
| **Experiência** | Timeline profissional, formação acadêmica e evolução como desenvolvedor |
| **Certificações** | Cisco Networking, Pacote Office, SQL Bootcamp |
| **Contato** | WhatsApp, e-mail, LinkedIn, GitHub — com CTA "Disponível para início imediato" |

---

## Stack do portfólio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

**Bibliotecas:**
- [AOS](https://michalsnik.github.io/aos/) — animações de scroll reveal
- [Typed.js](https://mattboldt.com/demos/typed-js/) — efeito de digitação no hero
- [Bootstrap Icons](https://icons.getbootstrap.com/) — ícones
- [Devicons](https://devicon.dev/) — ícones de tecnologias
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) — estatísticas do GitHub

**Deploy:** [Vercel](https://vercel.com) via integração GitHub (auto-deploy a cada push na `main`)

---

## Funcionalidades

- Design dark premium com variáveis CSS (design tokens)
- Responsivo: mobile, tablet e desktop
- Animações suaves com AOS e CSS transitions
- Navbar com efeito blur no scroll e link ativo por seção
- Code window interativa com efeito 3D parallax no hover
- Badge pulsante de disponibilidade para estágio
- **Hero stats bar** com contador animado (apps em produção, tecnologias, semestre)
- **Níveis de proficiência** em todos os itens de skills (Dominando / Usando / Praticando)
- **GitHub Streak** e **Top Languages** direto do perfil
- **Diagrama de arquitetura CSS** do Conecta Bairro (Frontend → FastAPI → PostgreSQL → Railway)
- Botão de download do currículo em PDF
- SEO: meta tags, Open Graph com imagem, Twitter Card, Schema.org JSON-LD, sitemap.xml, robots.txt
- Acessibilidade: ARIA labels, focus visible, prefers-reduced-motion
- Microinterações: contadores animados, hover lift nos nodes de arquitetura
- Visitor counter na seção de contato

---

## Projetos em destaque

### Conecta Bairro
Plataforma comunitária full stack para moradores descobrirem eventos locais.
- **Problema:** moradores não tinham como descobrir eventos do próprio bairro
- **Solução:** PWA com API REST, autenticação JWT e deploy automatizado na nuvem
- **Stack:** FastAPI · PostgreSQL · SQLModel · JWT · Railway · PWA
- **Funcionalidades:** Geolocalização, controle de vagas, lista de espera automática, avaliações
- [Ver repositório](https://github.com/LuisEdu17y/Cadastro_conecta_bairro)

### Controle de Caixa Pro
Dashboard financeiro pessoal com gráficos dinâmicos e CI/CD completo.
- **Problema:** controlar finanças pessoais sem depender de apps proprietários
- **Solução:** dashboard com conversão em tempo real (USD/EUR/BTC) + pipeline CI/CD
- **Stack:** JavaScript ES6+ · Chart.js · Jest · GitHub Actions · Vercel
- [Ver repositório](https://github.com/LuisEdu17y/Controle-de-Caixa-Pro)

---

## Rodando localmente

Não requer instalação. Basta clonar e abrir o arquivo:

```bash
git clone https://github.com/LuisEdu17y/portifolio.website.hub.git
cd portifolio.website.hub
```

Abra o `index.html` diretamente no navegador, ou use a extensão **Live Server** no VS Code para hot reload.

---

## Estrutura de arquivos

```
portifolio.website.hub/
├── index.html                          # Página principal
├── assets/
│   ├── css/main.css                    # Estilos customizados (~1800 linhas)
│   ├── js/main.js                      # JavaScript (AOS, Typed, nav, counters, arch hover)
│   ├── img/                            # Imagens do projeto
│   └── vendor/                         # Bootstrap, AOS, Typed.js (locais)
├── imagem/
│   └── profile.jpg                     # Foto de perfil profissional
├── Curriculo_Luis_Eduardo_Ferreira.pdf # Currículo para download
├── sitemap.xml
└── robots.txt
```

---

## Contato

| Canal | Link |
|---|---|
| LinkedIn | [linkedin.com/in/luís-eduardo-00a685359](https://linkedin.com/in/lu%C3%ADs-eduardo-00a685359) |
| GitHub | [github.com/LuisEdu17y](https://github.com/LuisEdu17y) |
| E-mail | luis.eduardo17y@gmail.com |
| WhatsApp | [(61) 99185-5550](https://wa.me/5561991855550) |

---

Desenvolvido por **Luís Eduardo Carvalho Ferreira** · 2026
