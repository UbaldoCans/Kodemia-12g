/*
    crear un nuevo array con las inciales de cada mentor
    [
      "I. S. M."
    ]
  */

    /* crear un nuevo array con los mentores cuyo nombre comience con <vocal></vocal>

  */
    var mentorsArray = [
        {
          name: "Israel Salinas Martinez",
          scores: [
            {
              signature: "HTML",
              score: 8
            },
            {
              signature: "CSS",
              score: 10
            },
            {
              signature: "JS",
              score: 8
            },
            {
              signature: "ReactJS",
              score: 8
            }
          ]
        },
        {
          name: "David Cermeño Moranchel",
          scores: [
            {
              signature: "HTML",
              score: 8
            },
            {
              signature: "CSS",
              score: 7
            },
            {
              signature: "JS",
              score: 10
            },
            {
              signature: "ReactJS",
              score: 10
            }
          ]
        },
        {
          name: "Charles Silva",
          scores: [
            {
              signature: "HTML",
              score: 9
            },
            {
              signature: "CSS",
              score: 9
            },
            {
              signature: "JS",
              score: 10
            },
            {
              signature: "ReactJS",
              score: 9
            }
          ]
        },
        {
          name: "Michael Villalba Sotelo",
          scores: [
            {
              signature: "HTML",
              score: 8
            },
            {
              signature: "CSS",
              score: 10
            },
            {
              signature: "JS",
              score: 9
            },
            {
              signature: "ReactJS",
              score: 10
            }
          ]
        }
      ]
      console.log([0].signature)
const getMentorInitials = dataArray => {
    let mentorInitials = dataArray.map (item => {
        let name = item.name
        let nameArray = name.split(" ")
        let initialsString = ''
        nameArray.forEach( world => {
            initialsString += `${world.charAt(0).toupperCase()}.`
        })
        return mentorStrings
    }) 
    return mentorInitials
}
console.log (getMentorInitials(mentorsArray))