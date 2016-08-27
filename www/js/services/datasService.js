angular.module('centralemap').factory('DatasService', [ function() {
  var donneesBrutes = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "A",
        "type": "Résidence",
        "utilites": "Lessive",
        "img_link": "/img/photos/a.png",
        "descriptif": " ",
        "personnes": " ",
        "salles": "Sallon Adoma"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.770137071609497,
              45.78137436425566
            ],
            [
              4.7700029611587516,
              45.78131450606287
            ],
            [
              4.769863486289978,
              45.781471633681846
            ],
            [
              4.769855439662933,
              45.78150530382829
            ],
            [
              4.769863486289978,
              45.781533362268135
            ],
            [
              4.769892990589142,
              45.781550197325274
            ],
            [
              4.769919812679291,
              45.7815258800189
            ],
            [
              4.769986867904663,
              45.78155206788686
            ],
            [
              4.769954681396484,
              45.78159322022595
            ],
            [
              4.770107567310333,
              45.78166617202513
            ],
            [
              4.770206809043884,
              45.78155580900985
            ],
            [
              4.770037829875946,
              45.78149033932126
            ],
            [
              4.770137071609497,
              45.78137436425566
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "B",
        "type": "Résidence",
        "utilites": "Lessive",
        "img_link": "/img/photos/b.png",
        "descriptif": " ",
        "personnes": " ",
        "salles": "Sallon Adoma"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.770273864269257,
              45.781712935948775
            ],
            [
              4.770126342773437,
              45.78164933700303
            ],
            [
              4.769981503486633,
              45.78181394588994
            ],
            [
              4.7699761390686035,
              45.781838263070696
            ],
            [
              4.769981503486633,
              45.78187567409726
            ],
            [
              4.770021736621857,
              45.7819018618009
            ],
            [
              4.770040512084961,
              45.78187380354651
            ],
            [
              4.770099520683289,
              45.78189063850085
            ],
            [
              4.77007269859314,
              45.78193179059002
            ],
            [
              4.770214855670929,
              45.782001000853334
            ],
            [
              4.77031946182251,
              45.78190934399971
            ],
            [
              4.770158529281616,
              45.781828910310125
            ],
            [
              4.770273864269257,
              45.781712935948775
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "C",
        "type": "Résidence",
        "utilites": "Lessive, Administration Adoma",
        "img_link": "/img/photos/c.png",
        "descriptif": "Les procédures relatives à Adoma se font ici. Horaires d'ouverture :",
        "personnes": " ",
        "salles": "Sallon Adoma"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.770241677761078,
              45.781987907026334
            ],
            [
              4.770096838474274,
              45.782148773830684
            ],
            [
              4.770094156265259,
              45.78217870248727
            ],
            [
              4.7701022028923035,
              45.782221724902946
            ],
            [
              4.770137071609497,
              45.78223855975223
            ],
            [
              4.770163893699646,
              45.7822048900486
            ],
            [
              4.770217537879944,
              45.782229207058805
            ],
            [
              4.770188033580779,
              45.78227035889809
            ],
            [
              4.770351648330688,
              45.7823395687411
            ],
            [
              4.770434796810149,
              45.78224791244407
            ],
            [
              4.7702765464782715,
              45.782174961406085
            ],
            [
              4.770383834838867,
              45.78205337613062
            ],
            [
              4.770241677761078,
              45.781987907026334
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "X",
        "type": "Résidence",
        "utilites": "Lessive, Administration Comparat",
        "img_link": "/img/photos/x.png",
        "personnes": "Annick Barthollet",
        "descriptif": "Toutes les procédures relatives à Comparat se font ici. Horaires d'ouverture :",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.770767390727997,
              45.78245928286134
            ],
            [
              4.77056086063385,
              45.782371367829356
            ],
            [
              4.7704267501831055,
              45.78251352823743
            ],
            [
              4.770630598068237,
              45.782601443045216
            ],
            [
              4.770767390727997,
              45.78245928286134
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "T",
        "type": "Résidence",
        "utilites": " ",
        "img_link": "/img/photos/t.png",
        "descriptif": "Ici se trouve le meilleur étage de Comparat",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.7709283232688895,
              45.78267252300123
            ],
            [
              4.7707244753837585,
              45.78258460830553
            ],
            [
              4.770593047142029,
              45.78272863869197
            ],
            [
              4.770796895027161,
              45.782814682641394
            ],
            [
              4.7709283232688895,
              45.78267252300123
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "V",
        "type": "Résidence",
        "utilites": "Lessive",
        "img_link": "/img/photos/v.png",
        "descriptif": " ",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.77094441652298,
              45.78308777777515
            ],
            [
              4.771073162555695,
              45.782940007286676
            ],
            [
              4.771282374858856,
              45.783033532957795
            ],
            [
              4.771145582199097,
              45.783177562184484
            ],
            [
              4.77094441652298,
              45.78308777777515
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "U",
        "type": "Résidence",
        "utilites": "Infirmerie",
        "img_link": "/img/photos/u.png",
        "descriptif": "Horaires d'ouverture de l'infirmerie : ",
        "personnes": " ",
        "salles": "Infirmerie"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.771126806735992,
              45.78342072756691
            ],
            [
              4.770914912223816,
              45.78333468455283
            ],
            [
              4.7710490226745605,
              45.78318317370525
            ],
            [
              4.771255552768707,
              45.78327669896844
            ],
            [
              4.771126806735992,
              45.78342072756691
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "M15",
        "type": "Vie Etudiante",
        "utilites": "Gymnase, Salle de musculation",
        "img_link": "/img/photos/m15.png",
        "descriptif": "Les sports de salle se passent ici. La salle est également disponible le vendredi soir et samedi matin sous condition de réservation avec le BDS. La salle de muscu est accéssible en semaine de 11 heures à 20h et le samedi matin.",
        "personnes": "Jean Cotinaud",
        "salles": "Salle de muscu"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.770504534244537,
              45.78367885581235
            ],
            [
              4.770351648330688,
              45.78361900009375
            ],
            [
              4.770378470420837,
              45.78358533122381
            ],
            [
              4.770284593105316,
              45.78353108689056
            ],
            [
              4.77055549621582,
              45.783216842818085
            ],
            [
              4.77081298828125,
              45.78333281405106
            ],
            [
              4.770504534244537,
              45.78367885581235
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "M16",
        "type": "Vie Etudiante",
        "utilites": "Foyer, Associations, Bar, Recharement ",
        "img_link": "/img/photos/m16.png",
        "descriptif": "Lieu de rencontre des centraliens, ici tu trouveras le bar qui peut te servir des cafés, viennoiseries, sandwichs, pastabox et salades le matin et de la bière le soir lors des afterworks, HH et Rewass. Tu trouveras également deux babyfoots et une table de ping pong.",
        "personnes": "Tous les membres d'associations",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.770037829875946,
              45.783965040078684
            ],
            [
              4.7703006863594055,
              45.78407726880172
            ],
            [
              4.770606458187103,
              45.783734970490165
            ],
            [
              4.770348966121674,
              45.78362274107807
            ],
            [
              4.770037829875946,
              45.783965040078684
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "M14",
        "type": "Vie Etudiante",
        "utilites": "Réstaurant Universitaire",
        "img_link": "/img/photos/m14.png",
        "descriptif": "Ici, tu mangeras tes repas le midi, pour environ 3,5 euros par repas.",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.770008325576782,
              45.78439711942286
            ],
            [
              4.769742786884308,
              45.78428302087382
            ],
            [
              4.770032465457916,
              45.78396691055928
            ],
            [
              4.7703006863594055,
              45.784079139278525
            ],
            [
              4.770008325576782,
              45.78439711942286
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "W1bis",
        "type": "Cours",
        "utilites": " ",
        "img_link": "/img/photos/w1bis.png",
        "descriptif": "La plupart des TDs se fait ici. Presque toutes les matières peuvent donc avoir des cours dans ce bâtiment.",
        "personnes": " ",
        "salles": "Salles 11 à 20, Salles 111 à 120"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.769015908241271,
              45.78409971451922
            ],
            [
              4.7684794664382935,
              45.78386964548648
            ],
            [
              4.76857602596283,
              45.78376863926975
            ],
            [
              4.7691017389297485,
              45.783996838239815
            ],
            [
              4.769015908241271,
              45.78409971451922
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "W1",
        "type": "Cours",
        "utilites": "Machine à café",
        "img_link": "/img/photos/w1.png",
        "salles": "Amphis 1 à 3, salles 101 à 106, Amphis 201 à 203, Salles 104 à 118",
        "descriptif": "Ici tu trouveras au rez-de-chaussée les amphis, au 1er étage plus d'amphis et des grandes salles, et au deuxième étage, les salles de langue et encore plus d'amphis. Beaucoup de matières sont donc concernées par ce bâtiment",
        "personnes": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.768460690975189,
              45.78375554585788
            ],
            [
              4.7683534026145935,
              45.783710654136705
            ],
            [
              4.7684043645858765,
              45.78366015090719
            ],
            [
              4.767765998840332,
              45.78338144707695
            ],
            [
              4.767720401287079,
              45.78342633906322
            ],
            [
              4.767564833164215,
              45.78336274207202
            ],
            [
              4.767473638057709,
              45.783465619521536
            ],
            [
              4.767618477344512,
              45.78353482788076
            ],
            [
              4.767540693283081,
              45.783635834521114
            ],
            [
              4.768165647983551,
              45.78391640756189
            ],
            [
              4.7682568430900565,
              45.783817271915474
            ],
            [
              4.768358767032622,
              45.783858422582554
            ],
            [
              4.768460690975189,
              45.78375554585788
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "S3",
        "type": "Vie Etudiante",
        "utilites": "Bibliothèque, Ordinateurs disponibles",
        "img_link": "/img/photos/s3.png",
        "salles": " ",
        "descriptif": "Bibliothèque où tu peux te poser tranquillement pour lire un livre, utiliser les ordinateurs.",
        "personnes": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.768270254135132,
              45.78281655316056
            ],
            [
              4.768058359622955,
              45.78272863869197
            ],
            [
              4.76793497800827,
              45.78287266870631
            ],
            [
              4.768130779266357,
              45.78296432397625
            ],
            [
              4.768270254135132,
              45.78281655316056
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "DSI",
        "type": "Administration",
        "utilites": "Ordinateurs en libre accès",
        "img_link": "/img/photos/dsi.png",
        "descriptif": "Bâtiment des résponsables de l'informatique de l'École, la Direction des Systèmes d'Information",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.768447279930115,
              45.783504899952185
            ],
            [
              4.768525063991547,
              45.78342072756691
            ],
            [
              4.7684526443481445,
              45.78334216655932
            ],
            [
              4.768425822257996,
              45.78325799392836
            ],
            [
              4.768420457839965,
              45.78317195066313
            ],
            [
              4.768447279930115,
              45.78309525981481
            ],
            [
              4.768503606319427,
              45.78301856886096
            ],
            [
              4.76829707622528,
              45.782928784195605
            ],
            [
              4.7680529952049255,
              45.783194396745124
            ],
            [
              4.768173694610595,
              45.78324302989177
            ],
            [
              4.768095910549164,
              45.78335151906604
            ],
            [
              4.768447279930115,
              45.783504899952185
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Z2",
        "type": "?",
        "img_link": "/img/photos/z2.png",
        "utilites": " ",
        "descriptif": " L'utilité de ce bâtiment reste mystérieuse pour tes 2A!",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.76757287979126,
              45.78306907267168
            ],
            [
              4.767894744873047,
              45.782698710330614
            ],
            [
              4.767782092094421,
              45.78264820618438
            ],
            [
              4.767489731311798,
              45.782979288087674
            ],
            [
              4.767527282238007,
              45.78299986373428
            ],
            [
              4.7675058245658875,
              45.78303727398138
            ],
            [
              4.76757287979126,
              45.78306907267168
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Q5",
        "type": "?",
        "img_link": "/img/photos/q5.png",
        "utilites": " ",
        "descriptif": " L'utilité de ce bâtiment reste mystérieuse pour tes 2A!",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.766958653926849,
              45.782474247108276
            ],
            [
              4.766843318939209,
              45.78243496595146
            ],
            [
              4.766918420791626,
              45.7823395687411
            ],
            [
              4.767023026943206,
              45.782390073166916
            ],
            [
              4.766958653926849,
              45.782474247108276
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "R6",
        "type": "Administration",
        "img_link": "/img/photos/r6.png",
        "utilites": " ",
        "descriptif": "Dans L'accueil tu peux trouver (des fois) les colis que tu reçois par la poste. ",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.766717255115509,
              45.78244993020493
            ],
            [
              4.766612648963927,
              45.782405037432454
            ],
            [
              4.7664570808410645,
              45.78258086725157
            ],
            [
              4.76655900478363,
              45.78262201883129
            ],
            [
              4.766717255115509,
              45.78244993020493
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "E6",
        "type": "Labo",
        "img_link": "/img/photos/e6.png",
        "utilites": " ",
        "descriptif": "Ce bâtiment est concerné par la mécanique des fluides et l'électronique.",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.767725765705109,
              45.784112807850256
            ],
            [
              4.7671303153038025,
              45.783858422582554
            ],
            [
              4.767229557037353,
              45.78375180488251
            ],
            [
              4.767822325229645,
              45.78400619063671
            ],
            [
              4.767725765705109,
              45.784112807850256
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "F7",
        "type": "Labo",
        "img_link": "/img/photos/f7.png",
        "utilites": "Machine à café",
        "descriptif": "Ce bâtiment est concerné par la chimie et la physique.",
        "personnes": " ",
        "salles": "Salles 21, 7121, 7118, 7122, CAO, 7238, 7339, 7428, 7429, 7335, 7430"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.768787920475006,
              45.784586036179135
            ],
            [
              4.768101274967194,
              45.78428863228334
            ],
            [
              4.768205881118774,
              45.784178274459286
            ],
            [
              4.768887162208557,
              45.784477549407256
            ],
            [
              4.768787920475006,
              45.784586036179135
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "D5",
        "type": "Cours",
        "img_link": "/img/photos/d5.png",
        "utilites": "Service des stages, vie scolaire",
        "descriptif": "Dans ce bâtiment tu trouveras quelques bureaux du personnel de l'administration, des salles dédiés aux études de l'Économie et les résponsables du service des stages et de la vie scolaire",
        "personnes": "C. Musy-Bassot, S. Gros",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.76681113243103,
              45.78355540332234
            ],
            [
              4.766918420791626,
              45.783446914544825
            ],
            [
              4.767221510410309,
              45.78358346073044
            ],
            [
              4.767122268676758,
              45.783693819731965
            ],
            [
              4.76681113243103,
              45.78355540332234
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "D5 bis",
        "type": "Cours",
        "img_link": "/img/photos/d5bis.png",
        "utilites": " ",
        "descriptif": " L'utilité de ce bâtiment reste mystérieuse pour tes 2A!",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.766875505447388,
              45.78363770501272
            ],
            [
              4.766736030578612,
              45.78357971974353
            ],
            [
              4.766642153263092,
              45.78367698532211
            ],
            [
              4.766784310340881,
              45.7837312295134
            ],
            [
              4.766875505447388,
              45.78363770501272
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "D4",
        "type": "Labo",
        "img_link": "/img/photos/d4.png",
        "utilites": " ",
        "descriptif": "Ici tu trouveras des installations dédiées à l'ingénierie des matériaux.",
        "personnes": " ",
        "salles": "Salles 4011, 4109, 4008, 4014, 4009"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.766738712787628,
              45.78346936051613
            ],
            [
              4.766572415828705,
              45.78340576357401
            ],
            [
              4.766819179058075,
              45.78313454050639
            ],
            [
              4.7669801115989685,
              45.783205619782734
            ],
            [
              4.766738712787628,
              45.78346936051613
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "D4 bis",
        "type": "Labo",
        "img_link": "/img/photos/d4bis.png",
        "utilites": " ",
        "descriptif": "Ce bâtiment est un atelier qui sert pour l'ingénierie des matériaux",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.766491949558258,
              45.78341511607004
            ],
            [
              4.7663310170173645,
              45.78335151906604
            ],
            [
              4.76643294095993,
              45.78324490039656
            ],
            [
              4.766588509082794,
              45.7833047565168
            ],
            [
              4.766491949558258,
              45.78341511607004
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "H9",
        "type": "Labo",
        "img_link": "/img/photos/h9.png",
        "utilites": "Machine à café",
        "descriptif": "Ce bâtiment concerne l'étude de la mécanique des fluides et l'énergie éléctrique.",
        "personnes": " ",
        "salles": "Salles Bretagne, Acquitaine, Bourbonnais, Bourgogne"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.76805567741394,
              45.785603557004706
            ],
            [
              4.767918884754181,
              45.78554931463521
            ],
            [
              4.767961800098419,
              45.785493201783666
            ],
            [
              4.767744541168213,
              45.785405291536
            ],
            [
              4.768393635749817,
              45.78468330000202
            ],
            [
              4.768758416175842,
              45.78483293632128
            ],
            [
              4.76805567741394,
              45.785603557004706
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "H10",
        "type": "Labo",
        "utilites": "Ordinateurs en libre service",
        "img_link": "/img/photos/h10.png",
        "descriptif": "Ici tu trouveras des installations concernant la tribologie et l'informatique. L'accès aux ordinateurs se fait par l'entrée côté Est.",
        "personnes": " ",
        "salles": "Salles micro3, micro4, micro5"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.768106639385223,
              45.78555492591728
            ],
            [
              4.768761098384857,
              45.784838547675434
            ],
            [
              4.769217073917389,
              45.78503307427041
            ],
            [
              4.76857602596283,
              45.78576441337628
            ],
            [
              4.768106639385223,
              45.78555492591728
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "L13",
        "type": "?",
        "utilites": " ",
        "img_link": "/img/photos/l13.png",
        "descriptif": " L'utilité de ce bâtiment reste mystérieuse pour tes 2A!",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.769882261753082,
              45.78503120382559
            ],
            [
              4.769520163536072,
              45.78487969758867
            ],
            [
              4.769665002822876,
              45.78472445002987
            ],
            [
              4.770021736621857,
              45.784883438488365
            ],
            [
              4.769882261753082,
              45.78503120382559
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "I11",
        "type": "Labo",
        "utilites": "Machine à café",
        "img_link": "/img/photos/i11.png",
        "descriptif": "Ce bâtiment est dedié à l'étude de la mécanique des fluides.",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.769742786884308,
              45.785265008938765
            ],
            [
              4.769386053085326,
              45.78511350333727
            ],
            [
              4.768997132778167,
              45.785547444207744
            ],
            [
              4.769345819950103,
              45.78570081905229
            ],
            [
              4.769742786884308,
              45.785265008938765
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "CI",
        "type": "?",
        "utilites": " ",
        "img_link": "/img/photos/ci.png",
        "descriptif": " L'utilité de ce bâtiment reste mystérieuse pour tes 2A!",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.770096838474274,
              45.785689596517
            ],
            [
              4.769968092441559,
              45.78550442435849
            ],
            [
              4.770222902297974,
              45.785412773264596
            ],
            [
              4.77031409740448,
              45.78554931463521
            ],
            [
              4.770485758781433,
              45.78549694264219
            ],
            [
              4.770552814006805,
              45.78559233444983
            ],
            [
              4.770386517047882,
              45.78563722465576
            ],
            [
              4.770362377166748,
              45.78560168657905
            ],
            [
              4.770096838474274,
              45.785689596517
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "J12",
        "type": "Labo",
        "utilites": " ",
        "img_link": "/img/photos/j12.png",
        "descriptif": "Ce bâtiment est dedié à l'étude de la mécanique des fluides.",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.768905937671661,
              45.786209571612794
            ],
            [
              4.768535792827606,
              45.786056198168
            ],
            [
              4.768857657909393,
              45.785695207784926
            ],
            [
              4.769217073917389,
              45.785844841387984
            ],
            [
              4.768905937671661,
              45.786209571612794
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "KCA",
        "type": "Labo",
        "utilites": " ",
        "img_link": "/img/photos/kca.png",
        "descriptif": "Ce bâtiment est dedié à l'étude de l'acoustique",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.768342673778534,
              45.78601317871136
            ],
            [
              4.768090546131134,
              45.785910305963036
            ],
            [
              4.768095910549164,
              45.78589347222252
            ],
            [
              4.767913520336151,
              45.785813044280964
            ],
            [
              4.768002033233643,
              45.78571578242918
            ],
            [
              4.7681549191474915,
              45.785777506316336
            ],
            [
              4.768171012401581,
              45.78576441337628
            ],
            [
              4.7684526443481445,
              45.78587850889334
            ],
            [
              4.768463373184204,
              45.78589721305418
            ],
            [
              4.76843386888504,
              45.78590469471677
            ],
            [
              4.768342673778534,
              45.78601317871136
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "G8",
        "type": "?",
        "utilites": " ",
        "img_link": "/img/photos/g8.png",
        "descriptif": " L'utilité de ce bâtiment reste mystérieuse pour tes 2A!",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.767462909221649,
              45.78547636791718
            ],
            [
              4.767366349697113,
              45.785438959306795
            ],
            [
              4.767237603664398,
              45.78556614847967
            ],
            [
              4.767143726348877,
              45.785524999073154
            ],
            [
              4.767259061336517,
              45.78538845764297
            ],
            [
              4.767299294471741,
              45.78540903240043
            ],
            [
              4.767495095729827,
              45.78518645053013
            ],
            [
              4.767656028270721,
              45.78525565675309
            ],
            [
              4.767462909221649,
              45.78547636791718
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "G8 bis",
        "type": "?",
        "utilites": " ",
        "img_link": "/img/photos/g8bis.png",
        "descriptif": " L'utilité de ce bâtiment reste mystérieuse pour tes 2A!",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.767674803733826,
              45.78521824799459
            ],
            [
              4.7675567865371695,
              45.78517335745127
            ],
            [
              4.767602384090424,
              45.78511163289517
            ],
            [
              4.7675567865371695,
              45.78509853979874
            ],
            [
              4.767570197582245,
              45.78507796492668
            ],
            [
              4.767519235610962,
              45.78505551960306
            ],
            [
              4.76768285036087,
              45.784883438488365
            ],
            [
              4.767924249172211,
              45.78498257223887
            ],
            [
              4.767841100692749,
              45.78508170581306
            ],
            [
              4.767800867557526,
              45.78507048315315
            ],
            [
              4.767674803733826,
              45.78521824799459
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Y20",
        "type": "Administration",
        "utilites": " Réception des colis",
        "img_link": "/img/photos/y20.png",
        "descriptif": "Le magasin est normalement où tous les colis de la poste qui sont trop grands pour les résidences finissent.",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.767932295799255,
              45.78492271792002
            ],
            [
              4.7678142786026,
              45.78487408623864
            ],
            [
              4.768010079860686,
              45.78465524314746
            ],
            [
              4.767972528934479,
              45.78463279765365
            ],
            [
              4.7680529952049255,
              45.78452618143455
            ],
            [
              4.7682273387908936,
              45.78459912939598
            ],
            [
              4.767932295799255,
              45.78492271792002
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Learning Lab",
        "type": "Vie Etudiante",
        "utilites": "Médias intéractifs à disposition",
        "img_link": "/img/photos/learninglab.png",
        "descriptif": "Salle avec de nombreux outils média (tableau blanc intéractif, ordinateurs, webcams, ...) qui peut être réservée par des élèves.",
        "personnes": " ",
        "salles": " "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              4.767047166824341,
              45.78569146693971
            ],
            [
              4.76694792509079,
              45.785813044280964
            ],
            [
              4.76692110300064,
              45.7859215284539
            ],
            [
              4.766990840435028,
              45.78592901011321
            ],
            [
              4.766864776611328,
              45.78635733343487
            ],
            [
              4.766824543476105,
              45.78632927742283
            ],
            [
              4.766792356967926,
              45.78632927742283
            ],
            [
              4.76669579744339,
              45.78639848222701
            ],
            [
              4.766671657562256,
              45.786486390908415
            ],
            [
              4.766567051410675,
              45.7864620757551
            ],
            [
              4.766618013381958,
              45.78631057340695
            ],
            [
              4.766593873500824,
              45.78630496220096
            ],
            [
              4.766585826873779,
              45.786342370230216
            ],
            [
              4.766548275947571,
              45.786338629428414
            ],
            [
              4.766548275947571,
              45.786303091798835
            ],
            [
              4.7664302587509155,
              45.786276906162556
            ],
            [
              4.766553640365601,
              45.7858336188817
            ],
            [
              4.7666314244270325,
              45.78584858222292
            ],
            [
              4.766778945922852,
              45.785884120142256
            ],
            [
              4.766795039176941,
              45.78579059925329
            ],
            [
              4.766666293144226,
              45.785734486644614
            ],
            [
              4.766768217086792,
              45.7856222612578
            ],
            [
              4.766773581504822,
              45.78561103870669
            ],
            [
              4.766907691955566,
              45.78566715143963
            ],
            [
              4.766888916492462,
              45.78567837397945
            ],
            [
              4.766910374164581,
              45.78568585567141
            ],
            [
              4.76694256067276,
              45.78564096550464
            ],
            [
              4.767047166824341,
              45.78569146693971
            ]
          ]
        ]
      }
    }
  ]
};
    var datasObj = {};
   datasObj.donneesStylees = [];

  for(var i=0;i<donneesBrutes.features.length;i++){
    data=donneesBrutes.features[i];
    if(donneesBrutes.features[i].properties.type==="Résidence"){
      style={
            weight: 5,
            color: '#0000ff',
            dashArray: '',
            fillOpacity: 0.7
          };
    }
    else{
      style={
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
          };
    }
    datasObj.donneesStylees[i] ={
          data : data,
          style: style
        }
  }
return datasObj;
}]);