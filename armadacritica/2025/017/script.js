function openTab(evt, tabName) {
    // Esconde todos os conteúdos de abas
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    // Remove a classe "active" de todos os botões
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
    
    // Mostra a aba atual e adiciona a classe "active" ao botão
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
