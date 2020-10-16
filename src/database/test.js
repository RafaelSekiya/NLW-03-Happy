const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    
    // inserir dados na tabela
    await saveOrphanage(db, {
           lat: "-23.4839906",
           lng: "-47.4871743",
           name: "Lar de paz",
           about:"Presta assistência a crianças de 05 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
           whatsapp: "15946523855",
           images: [
               "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
               "https://images.unsplash.com/photo-1597992350431-56cb7e28a7a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
           ].toString(),
           instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
           opening_hours: "Horário de visitas Das 18h até 8h",
           open_on_weekends: "0",
   });

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo ID
   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
   console.log(orphanage)

    // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
}) 