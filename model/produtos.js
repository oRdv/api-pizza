var usuario = {
    clientes: 
    [
        {
            id:1,
            imagem: './img/Gran_Mamare.jpg',
            nome: 'Tamires Fernandes',
            endereco_email: 'tamiresfernandes@gmail.com',
            senha: 12345678,
            endereco: 'Avenida Doutor Artur Costa Filho, 27 - Sumaré',
            telefone:'(11) 95553-9563'
        },
        {
            id:2,
            imagem: './img/hellokitty.jpg',
            nome: 'Alice Tavares',
            endereco_email: 'alicetavares@gmail.com',
            senha: 12345678,
            endereco:'Rua Fortaleza - Jardim Brasilândia',
            telefone:'(11) 97142-7270'
        },
        {
            id:3,
            imagem: './img/careca.jpg',
            nome: 'Luana Magalhães',
            endereco_email: 'luanamaga@gmail.com',
            senha: 12345678,
            endereco:'Pc Mons Albino, 104',
            telefone:'(11) 97539-3125'
        },
        {
            id:4,
            imagem: './img/howl.jpg',
            nome: 'Kaina Braga',
            endereco_email: 'bragakaina@gmail.com',
            senha: 12345678,
            endereco:'Rua Washington Luís - Quiririm',
            telefone:'(11) 95553-9563'
        },
        {
            id:5,
            imagem: './img/jiji.jpg',
            nome: 'Maria luiza',
            endereco_email: 'mariabaliero@gmail.com',
            senha: 12345678,
            endereco:'Avenida Vinte e Nove de Abril, 350 - Centro',
            telefone:'(11) 92698-3698'
        },
        {
            id:6,
            imagem: './img/hellokitty.jpg',
            nome: 'Nathalia Kawakami',
            endereco_email: 'kawakaminat@gmail.com',
            senha: 12345678,
            endereco:'Avenida da Liberdade, 170',
            telefone:'(11) 98574-6274'
        },
        {
            id:7,
            imagem: '',
            nome: 'ivy torquato',
            endereco_email: 'madokaivy@gmail.com',
            senha: 12345678,
            endereco:'Rua Conceição Veloso, 48 - Vila Mariana',
            telefone:'(11) 99492-1523'
        },
        {
            id:8,
            imagem: '',
            nome: 'Nelson Silva',
            endereco_email: 'nelsinhofilho@gmail.com',
            senha: 12345678,
            endereco:'Rua Duarte de Azevedo, 258 - Santana',
            telefone:'(11) 99685-5329'
        },
        {
            id:9,
            imagem: '',
            nome: 'Mylena Caetano',
            endereco_email: 'caetanomymy@gmail.com',
            senha: 12345678,
            endereco:'R. Rosa Baraúna, 70 - Sta Marta, Xique-Xique - BA, 47400-000',
            telefone:'(11) 95859-4000'
        },

        {
            id:10,
            imagem: '',
            nome: 'Yumi',
            endereco_email: 'yummmiiifushgro@gmail.com',
            senha: 12345678,
            endereco:'Avenida Eduardo Pereira Ramos, 483',
            telefone:'(11) 95859-4000'
        }
    ],


}

var categorias = {
    
    categoria: 
    [
        {
            nome: 'Pizza Salgada'
        },

        {
            nome: 'Bebidas'
        },
        
        {
            nome: 'Pastel Salgado'
        },
        
        {
            nome: 'Pizza Doce'
        },

        {
            nome: 'Sobremesas'   
        },

        {
            nome: 'Sorvetes'
        },

        {
            nome: 'Pastel Doce'
        }
    ]
}

var produtos = {
    pizza: 
    [
        {
            id: 1,
            tipo: categorias.categoria[0].nome,
            nome: 'Margherita',
            descricao: 'Molho de tomate, mussarela, manjericão e parmesão.',
            imagem: '',
            preco : 'R$31,90', 
            comentarios: produtosComentados.comentarios[0],
        },
         
        {
            id:2,
            tipo: categorias.categoria[0].nome,
            nome: 'Pepperoni',
            descricao: 'Molho de tomate, muçarela, salame pepperoni fatiado e orégano.',
            imagem: '',
            preco:'R$33,50',
            comentarios: produtosComentados.comentarios[1],
        },
        
        {
            id:3,
            tipo: categorias.categoria[0].nome,
            nome: 'Calabresa',
            descricao: 'Molho de tomate, mussarela, calabresa fatiada e bacon.',
            imagem: '',
            preco: 'R$34,98',
            comentarios: produtosComentados.comentarios[2],
        },

        {
            id:4,
            tipo: categorias.categoria[0].nome,
            nome: 'Quatro Queijos',
            descricao: 'Mussarela, parmesão, gorgonzola e provolone derretidos sobre o molho de tomate.',
            imagem: '',
            preco: 'R$36,90',
            comentarios: produtosComentados.comentarios[3],
        },  
        
        {
            id:5,
            tipo: categorias.categoria[0].nome,
            nome: 'Frango com Catupiry',
            descricao: 'Molho de tomate, frango desfiado e cremoso catupiry.',
            imagem: '',
            preco: 'R$35,90',
            comentarios: produtosComentados.comentarios[4],

        },

        {
            id:6,
            tipo: categorias.categoria[0].nome,
            nome: 'Portuguesa',
            descricao: 'Mussarela, presunto, ovos, cebola, pimentão, azeitonas e molho de tomate.',
            imagem: '',
            preco: 'R$37,90',
            comentarios: produtosComentados.comentarios[5],
        },

        {
            id:7,
            tipo: categorias.categoria[3].nome,
            nome: 'Pizza de Chocolate com Morangos',
            descricao: 'Massa de pizza doce, coberta com ganache de chocolate belga, morangos frescos e raspas de chocolate branco.',
            imagem: '',
            preco: 'R$29,90',
            comentarios: produtosComentados.comentarios[6],

        },

        {
            id:8,
            tipo: categorias.categoria[3].nome,
            nome: 'Pizza de Banana Caramelizada',
            descricao: 'Massa de pizza doce, bananas caramelizadas, cobertura de caramelo artesanal, e uma pitada de canela.',
            imagem: '',
            preco: 'R$27,90',
            comentarios: produtosComentados.comentarios[7],

        },

        {
            id:9,
            tipo: categorias.categoria[3].nome,
            nome: 'Pizza de Nutella com Marshmallow',
            descricao: 'Massa de pizza doce coberta com Nutella cremosa e generosas porções de marshmallows tostados.',
            imagem: '',
            preco: 'R$27,90',
            comentarios: produtosComentados.comentarios[8],
        } 
        
    ],

    bedidas:  [
        {
            id: 1,
            tipo: 'Não Alcoólica',
            imagem: '',
            nome: 'Refrigerante Lata(350ml)',
            preco: 'R$5,90',
            descricao: 'Opções de refrigerantes como Coca-Cola, Pepsi, Guaraná, entre outros.'
        },
        {
            id: 2,
            tipo: 'Não Alcoólica',
            imagem: '',
            nome: 'Suco Natural(300ml)',
            preco: 'R$7,90',
            descricao: 'Variedade de sucos naturais como laranja, limonada, abacaxi, entre outros.'
        },
        {
            id: 3,
            tipo: 'Alcoólica',
            imagem: '',
            nome: 'Cerveja Garrafa Long Neck (355ml)',
            preco: 'R$8,90',
            descricao: 'Diversidade de cervejas, incluindo opções nacionais e importadas.'
            
        },
        {
            id: 4,
            tipo: 'Não Alcoólica',
            imagem: '',
            nome: 'Água Mineral sem Gás (500ml)',
            preco: 'R$4,90',
            descricao:  'Água mineral natural para acompanhar a refeição.'

        },
        {
            id: 5,
            tipo: 'Não Alcoólica',
            imagem: '',
            nome: 'Limonada Suíça Jarra (1L)',
            preco: 'R$17,90',
            descricao:  'Limonada suíça refrescante servida em jarra para compartilhar.'
        },
        {
            
            id: 6,
            tipo: 'Não Alcoólica',
            imagem: '',
            nome: 'Limonada Suíça Jarra (1L)',
            preco: 'R$4,90',
            descricao:  'Água mineral natural para acompanhar a refeição.'
        },
        {
            id: 6,
            tipo: 'Não Alcoólica',
            imagem: '',
            nome: 'Refrigerante (1L)',
            preco: 'R$12,90',
            descricao: 'Opções de refrigerantes como Coca-Cola, Pepsi, Guaraná, entre outros.'
        }

    ],

    pasteis: [
        {
            id:1,
            tipo: categorias.categoria[2].nome,
            nome: 'Pastel de Carne',
            descricao: 'Carne moída temperada, cebola, tomate e temperos.',
            imagem: '',
            preco: 'R$10,00',

        },
        {
            id:2,
            tipo: categorias.categoria[2].nome,
            nome: 'Pastel de Queijo',
            descricao: 'Queijo mussarela derretido.',
            imagem: '',
            preco: 'R$10,00',
        },
        {
            id:3,
            tipo: categorias.categoria[2].nome,
            nome: 'Pastel de Frango com Catupiry',
            descricao: 'Frango desfiado, catupiry e temperos.',
            imagem: '',
            preco: 'R$10,00',
        },
        {
            id:4,
            tipo: categorias.categoria[2].nome,
            nome: 'Pastel de Calabresa com Queijo',
            descricao: 'Calabresa fatiada, queijo mussarela e cebola.',
            imagem: '',
            preco: 'R$10,00',
        },
        {
            id:5,
            tipo: categorias.categoria[2].nome,
            nome: 'Pastel de Palmito com Queijo',
            descricao: 'Palmito refogado, cebola, tomate, queijo e temperos.',
            imagem: '',
            preco: 'R$10,00',
        },
        {
            id:6,
            tipo: categorias.categoria[2].nome,
            nome: 'Pastel de Pizza',
            descricao: 'Mussarela, molho de tomate, presunto e orégano.',
            imagem: '',
            preco: 'R$10,00',

        },
        {
            id:7,
            tipo: categorias.categoria[2].nome,
            nome: 'Pastel de Camarão',
            descricao: 'Camarões temperados, cebola, pimentões e temperos.',
            imagem: '',
            preco: 'R$12,00',
        },
        {
            id:8,
            tipo: categorias.categoria[6].nome,
            nome: 'Pastel de Camarão',
            descricao: 'Camarões temperados, cebola, pimentões e temperos.',
            imagem: '',
            preco: 'R$12,00',
        }
    ],

    sobremesas: [
        {
            id:1,
            tipo: categorias.categoria[4].nome,
            nome: 'Pudim de Leite',
            imagem: '',
            descricao: 'Leite condensado, leite, ovos e calda de caramelo.',
            preco: 'R$9,90',
        },
        {
            id:2,
            tipo: categorias.categoria[4].nome,
            nome: 'Torta de Limão',
            imagem: '',
            descricao: 'Massa crocante, recheio de creme de limão e cobertura de merengue.',
            preco: 'R$12,90',

        },
            
        {
            id:3,
            tipo: categorias.categoria[4].nome,
            nome: 'Mousse de Chocolate',
            imagem: '',
            descricao: 'Chocolate meio amargo, creme de leite, ovos e açúcar.',
            preco: 'R$8,90',
        },
        {
            id:4,
            tipo: categorias.categoria[4].nome,
            nome: 'Tiramisu',
            imagem: '',
            descricao: 'Biscoitos tipo ladyfinger, café, mascarpone, cacau e rum.',
            preco: 'R$14,90',
        },

        {
            id:5,
            tipo: categorias.categoria[4].nome,
            nome: 'Cheesecake de Frutas Vermelhas',
            imagem: '',
            descricao: ' Base de biscoito, recheio de cream cheese e calda de frutas vermelhas.',
            preco: 'R$16,90',
        },

        {
            id:6,
            tipo: categorias.categoria[4].nome,
            nome: 'Pavê de Chocolate e Morango',
            imagem: '',
            descricao: 'Camadas alternadas de biscoitos, creme de chocolate, morangos e chantilly.',
            preco: 'R$11,90',
        },

        {
            id:7,
            tipo: categorias.categoria[4].nome,
            nome: 'Creme Brûlée',
            imagem: '',
            descricao: 'Creme de baunilha, açúcar cristalizado e raspas de limão.',
            preco: 'R$13,90',
        },
        {
            id:8,
            tipo: categorias.categoria[4].nome,
            nome: 'Torta de Maçã',
            imagem: '',
            descricao: 'Massa folhada, maçãs, açúcar e canela.',
            preco: 'R$10,90',
        },

    ],

    sorvetes: [
        {
            id:1,
            tipo: categorias.categoria[5].nome,
            nome: 'Chocolate Belga',
            imagem: '',
            descricao: 'Chocolate belga, leite, creme de leite e açúcar.',
            preco: 'R$7,90 (uma bola)',
        },
        {
            id:2,
            tipo: categorias.categoria[5].nome,
            nome: 'Baunilha Bourbon',
            imagem: '',
            descricao: 'Chocolate belga, leite, creme de leite e açúcar.',
            preco: 'R$7,90 (uma bola)',
        },

        {
    
            id:3,
            tipo: categorias.categoria[5].nome,
            nome: 'Morango Fresco',
            imagem: '',
            descricao: 'Morangos frescos, leite, creme de leite e açúcar.',
            preco: 'R$8,90 (uma bola)',

        },

        {
         
            id:4,
            tipo: categorias.categoria[5].nome,
            nome: 'Limão Siciliano',
            imagem: '',
            descricao: 'Suco e raspas de limão siciliano, leite, creme de leite e açúcar.',
            preco: 'R$8,90 (uma bola)',

        },

        {

            id:5,
            tipo: categorias.categoria[5].nome,
            nome: 'Caramelo Salgado',
            imagem: '',
            descricao: 'Caramelo artesanal com toque de sal, leite, creme de leite e açúcar.',
            preco: 'R$9,90 (uma bola)',

        },

        {

            id:6,
            tipo: categorias.categoria[5].nome,
            nome: 'Manga Alphonso',
            imagem: '',
            descricao: 'Manga Alphonso fresca, leite, creme de leite e açúcar.',
            preco: 'R$9,90 (uma bola)',

        },

        {

            id:7,
            tipo: categorias.categoria[5].nome,
            nome: 'Amarena (Cereja Italiana)',
            imagem: '',
            descricao: 'Cerejas amarena, leite, creme de leite e açúcar.',
            preco: 'R$10,90 (uma bola)',

        },

        {

            id:8,
            tipo: categorias.categoria[5].nome,
            nome: 'Cookies and Cream',
            imagem: '',
            descricao: 'Cookies de chocolate picados, leite, creme de leite e açúcar.',
            preco: 'R$8,90 (uma bola)',

        }
    ],

    
}

var produtosComentados = {
    comentarios: [
        {
            id:1,
            user: usuario.clientes[0].nome,
            data: '01/01/2023',
            imagemUser: usuario.clientes[0].imagem,
            avaliacao:produtosComentados.avaliacao[4].valor,
            titulo:'Uma explosão de sabores em cada fatia!',
            descricaoComentarios: 'A pizza Margherita é pura simplicidade e sabor. Com molho de tomate, queijo mozzarella fresco e folhas de manjericão, ela é uma explosão de gostos clássicos e equilibrados em uma massa fina e crocante. É um verdadeiro deleite para quem aprecia sabores autênticos e tradicionais.'
        },
    
        {
            id:2,
            user: usuario.clientes[1].nome,
            data: '17/03/2023 ',
            imagemUser:  usuario.clientes[1].imagem,
            avaliacao: produtosComentados.avaliacao[4].valor,
            titulo:'Uma obra de arte em forma de pizza!',
            descricaoComentarios: 'O toque picante dele dá uma animada no sabor, e quando você dá aquela mordida e sente a combinação da massa crocante com o queijo derretido e o sabor intenso do pepperoni, é como uma explosão de felicidade na boca. É um clássico que sempre me conquista!',
           
        },
    
        {
            id:3,
            user: usuario.clientes[2].nome,
            data: '14/02/2023 ',
            imagemUser:  usuario.clientes[2].imagem,
            avaliacao: produtosComentados.avaliacao[4].valor,
            titulo:'Sabor que abraça o paladar!',
            descricaoComentarios: 'É como se cada pedaço fosse uma festa para o paladar, com a mistura irresistível da suculência da calabresa com a massa macia e a crocância da borda. É um clássico reconfortante que sempre traz aquela sensação de satisfação ao saborear.',
    
    
        },
    
        {
            id:4,
            user:  usuario.clientes[3].nome,
            data: '02/04/2023',
            imagemUser:  usuario.clientes[3].imagem,
            avaliacao: produtosComentados.avaliacao[4].valor,
            titulo:'Sabor que abraça o paladar!',
            descricaoComentarios: 'A harmonia entre parmesão, gorgonzola, provolone e mussarela é incrível. Cada queijo se destaca e se mescla perfeitamente, proporcionando uma experiência indulgente e rica em sabores.',
           
    
        },
    
        {
            id:5,
            user: usuario.clientes[4].nome,
            data: '19/08/2023',
            imagemUser:  usuario.clientes[4].imagem,
            avaliacao: produtosComentados.avaliacao[4].valor,
            titulo:'Uma experiência gastronômica memorável!!',
            descricaoComentarios: 'O frango desfiado com o cremoso catupiry é uma combinação celestial. O sabor suave do frango se destaca, complementado pela cremosidade do queijo.',
           
        },
    
        {
            id:6,
            user: usuario.clientes[5].nome,
            data: '18/032023',
            imagemUser:  usuario.clientes[5].imagem,
            avaliacao: produtosComentados.avaliacao[4].valor,
            titulo:'Um festival de aromas e gostos inesquecíveis!',
            descricaoComentarios: 'A mistura de ingredientes como presunto, ovos, cebola e azeitonas cria uma explosão de sabores. Uma experiência rica e diversificada a cada fatia.',
    
        },
    
        {
            id:7,
            user: usuario.clientes[6].nome,
            data: '01/09/2023',
            imagemUser: usuario.clientes[6].imagem,
            avaliacao:produtosComentados.avaliacao[4].valor,
            titulo:'Sabor que aquece o coração e satisfaz a alma!',
            descricaoComentarios: 'Uma deliciosa combinação de doçura e frescor. A base crocante da pizza é complementada pela riqueza do chocolate belga, enquanto os morangos adicionam uma nota refrescante. Uma verdadeira indulgência para os amantes de sobremesas.',
    
        },
    
        {
            id:8,
            user:  usuario.clientes[7].nome,
            data: '13/11/2023',
            imagemUser:  usuario.clientes[7].imagem,
            avaliacao: produtosComentados.avaliacao[4].valor,
            titulo:'Simplesmente irresistível a cada fatia!',
            descricaoComentarios: 'Uma explosão de sabores aconchegantes. A doçura natural das bananas caramelizadas se combina harmoniosamente com o toque rico e suave do caramelo. A canela adiciona um aroma reconfortante a cada mordida.',
    
        },
    
        {   
            id:9,
            user: usuario.clientes[8].nome,
            data: 'R$34,90  ',
            imagemUser: usuario.clientes[8].imagem,
            avaliacao: produtosComentados.avaliacao[4].valor,
            titulo:'Simplesmente irresistível a cada fatia!',
            descricaoComentarios: 'Uma explosão de indulgência. A base de Nutella, conhecida por sua cremosidade e sabor de chocolate, é a combinação perfeita com os marshmallows levemente caramelizados. Cada mordida é uma mistura de doçura e textura, garantindo uma experiência deliciosamente aconchegante.',
    
        }
    ],

    avaliacao : [
        {
            valor: '1 estrela'
        },

        {
            valor: '2 estrelas'
        },

        {
            valor: '3 estrelas'
        },

        {
            valor: '4 estrelas'
        },

        {
            valor: '5 estrelas'
        }
    ]
}
// console.log(produtos.pizza[8])
