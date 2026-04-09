# 🎨 Color Switcher: Tradutor Dinâmico de Cores

Este projeto é uma ferramenta interativa que permite ao usuário alterar o esquema de cores da página em tempo real, utilizando nomes de cores em português. O diferencial técnico aqui é o uso de um "dicionário" de mapeamento que traduz termos em português para constantes aceitas pelo CSS.

> **Status:** ✅ Concluído (Foco em Lógica de Objetos e DOM)

---

### 📝 Sobre o Projeto
Muitas vezes, usuários leigos não conhecem os nomes das cores em inglês (padrão do CSS). Este script resolve esse problema, atuando como um tradutor que captura a entrada do usuário, limpa o texto e aplica a cor correspondente às Variáveis CSS (**CSS Variables**) da página.

### 🛠️ Tecnologias e Conceitos Aplicados

- **Dicionário de Dados (Objects):** Uso de um objeto JavaScript para mapear mais de 40 cores (ex: "azul aço" → "steelblue").
- **Manipulação de Variáveis CSS:** Utilização de `setProperty` para alterar variáveis globais (`--corBack-bg--`), permitindo que a troca de cor afete múltiplos elementos do site simultaneamente.
- **Tratamento de Strings:** Uso de `.toLowerCase()` e `.trim()` para evitar erros caso o usuário digite com letras maiúsculas ou espaços extras.
- **Event Listeners:** Monitoramento de cliques no botão para disparar a lógica de troca sem recarregar a página.

### 🚀 Lógica de Tradução
O código segue este fluxo inteligente:
1.  **Captura:** Lê o valor do campo de input.
2.  **Normalização:** Remove espaços e padroniza para minúsculas.
3.  **Busca:** Tenta encontrar o termo no `dicionarioCores`.
4.  **Fallback:** Se a cor não estiver no dicionário (ex: se o usuário digitar "blue" diretamente ou um código Hexadecimal), o script tenta aplicar o valor original, garantindo que a ferramenta não quebre.

---

👨‍💻 Desenvolvedor
<table style="border: none;">
<tr>
<td align="center">
<a href="#">
<img src="https://github.com/alvesthzin-art.png" width="100px;" alt="Avatar"/><br />
<sub><b>@alvesthzin-art</b></sub>
</a>
</td>
</tr>
</table>


*Projeto desenvolvido para fins didáticos no SENAI Jandira.*
