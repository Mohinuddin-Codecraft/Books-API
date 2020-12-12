const express = require("express");
const { books } = require("../../data/file");
const router = express.Router();
const findModule = require('../../findModule');




router.get('/:field', (req, res) => {
    let module = findModule(req.params.field)
    // if(req.params.field==='books'){
    //     module=module.map(b=>{
    //         return {
    //             id:b.id,
    //             name:b.name,
    //             year:b.year,
    //             isbn:b.isbn,
    //             author:findModule('authors').find(a=>a.id===b.authorId),
    //             publisher:findModule('publishers').find(p=>p.id===b.publisherId)
    //         }
    //     })
    // }
    module.sort((a, b) => {
        if (a.year === b.year) {
            if (a.name - b.name >= 0) return 1;
            else return -1
        }
        return a.year - b.year
    })

    if (req.query.search) {
        let searchText = req.query.search;
        let resultantArray = [];
        console.log(searchText)
        module.forEach(element => {
            if (element.name.includes(searchText)) {
                resultantArray.push(element)
            }
        })
        return res.send(resultantArray)
    }

    res.send(module)
})

router.get('/:field/:id', (req, res) => {
    const module = findModule(req.params.field)
    let found = module.find(element => element.id === parseInt(req.params.id))
    if (found) {
        if (req.params.field === 'books') {
            found = {
                id: found.id,
                name: found.name,
                year: found.year,
                isbn: found.isbn,
                author: findModule('authors').find(a => a.id === found.authorId),
                publisher: findModule('publishers').find(p => p.id === found.publisherId)
            }
        }
        res.send(found)
    } else {
        res.json({ msg: `No member with the id of ${req.params.id} in ${req.params.field}` })
    }
})


module.exports = router