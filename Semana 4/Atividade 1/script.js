function selectProfessor()
{
    document.getElementById("display_professor").style.display = "initial";
    document.getElementById("display_aluno").style.display = "none";
}

function selectAluno()
{
    document.getElementById("display_aluno").style.display = "initial";
    document.getElementById("display_professor").style.display = "none";
}

class Pessoa
{
    constructor(nome, sobrenome, email, dataNascimento, telefone, celular, matricula)
    {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.celular = celular;
        this.matricula = matricula;
    }
}

class Aluno extends Pessoa
{
    constructor(nome, sobrenome, email, dataNascimento, telefone, celular, matricula, curso)
    {
        super(nome, sobrenome, email, dataNascimento, telefone, celular, matricula);

        this.curso = curso;
    }
    verPessoa()
    {
        console.log(this.nome);
        console.log(this.sobrenome);
        console.log(this.email);
        console.log(this.dataNascimento);
        console.log(this.telefone);
        console.log(this.celular);
        console.log(this.matricula);
        console.log(this.curso);
    }
}

class Professor extends Pessoa
{
    constructor(nome, sobrenome, email, dataNascimento, telefone, celular, matricula, area, lattes)
    {
        super(nome, sobrenome, email, dataNascimento, telefone, celular, matricula);

        this.area = area;
        this.lattes = lattes;
    }

    verPessoa()
    {
        console.log(this.nome);
        console.log(this.sobrenome);
        console.log(this.email);
        console.log(this.dataNascimento);
        console.log(this.telefone);
        console.log(this.celular);
        console.log(this.matricula);
        console.log(this.area);
        console.log(this.lattes);
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => 
{
    event.preventDefault();
    if(document.querySelector('input[name=btn]:checked').value == "professor")
    {
        const professor = new Professor
        (
            document.getElementById("nome").value,
            document.getElementById("sobrenome").value,
            document.getElementById("email").value,
            document.getElementById("data").value,
            document.getElementById("telefone").value,
            document.getElementById("celular").value,
            document.getElementById("matricula").value,
            document.getElementById("area").value,
            document.getElementById("lattes").value
        );
        professor.verPessoa();
    }
    else if(document.querySelector('input[name=btn]:checked').value == "aluno")
    {
        const aluno = new Aluno
        (
            document.getElementById("nome").value,
            document.getElementById("sobrenome").value,
            document.getElementById("email").value,
            document.getElementById("data").value,
            document.getElementById("telefone").value,
            document.getElementById("celular").value,
            document.getElementById("matricula").value,
            document.getElementById("curso").value
        );
        aluno.verPessoa();
    }
});
