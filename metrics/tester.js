var myName = 'Tester' + Math.floor(Math.random() * 1345).toString();

var Postbox = new CatSnake('ws://198.11.254.137:3081/', {
  commonName: myName
});

var recieved = [];

var packets = [
  {
    "_id": "5707dbf30fa33b8857483490",
    "index": 0,
    "guid": "6195cb86-1eec-4579-8e08-d12884b65287",
    "isActive": false,
    "balance": "$2,901.25",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": "Davenport Buck",
    "gender": "male",
    "company": "HONOTRON",
    "email": "davenportbuck@honotron.com",
    "phone": "+1 (884) 555-3330",
    "address": "320 Front Street, Cotopaxi, Federated States Of Micronesia, 8659",
    "about": "Id mollit ullamco consequat sint Lorem aliqua pariatur sint ut eiusmod ullamco sint non. Magna laboris aliqua commodo quis ut. Nisi irure dolore deserunt nisi dolore cillum officia commodo duis consectetur. Exercitation aute adipisicing sunt eu do nisi officia amet. Enim commodo deserunt exercitation do. Velit sint minim ad non aute nostrud.\r\n",
    "registered": "2014-08-16T06:11:14 +04:00",
    "latitude": 12.559837,
    "longitude": 106.670604,
    "tags": [
      "qui",
      "eiusmod",
      "laborum",
      "adipisicing",
      "ea",
      "amet",
      "ullamco"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Carmella Hancock"
      },
      {
        "id": 1,
        "name": "Carmela Cantu"
      },
      {
        "id": 2,
        "name": "Blankenship Huber"
      }
    ],
    "greeting": "Hello, Davenport Buck! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5707dbf3884f4aa013ed9007",
    "index": 1,
    "guid": "0dd7f371-5513-452d-a203-846767b5b495",
    "isActive": false,
    "balance": "$3,225.38",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "blue",
    "name": "Moody Gould",
    "gender": "male",
    "company": "GORGANIC",
    "email": "moodygould@gorganic.com",
    "phone": "+1 (963) 449-3326",
    "address": "517 Elliott Place, Bridgetown, Marshall Islands, 6192",
    "about": "Magna magna labore dolor sit eiusmod ullamco aute sint mollit enim culpa consequat officia. Irure in eu tempor tempor tempor mollit exercitation nisi exercitation fugiat commodo. Dolore enim fugiat voluptate nostrud elit mollit incididunt reprehenderit dolor non ipsum.\r\n",
    "registered": "2016-02-08T09:17:21 +05:00",
    "latitude": -32.562144,
    "longitude": -164.547754,
    "tags": [
      "mollit",
      "consectetur",
      "fugiat",
      "et",
      "culpa",
      "anim",
      "cupidatat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Pauline Harvey"
      },
      {
        "id": 1,
        "name": "Blackwell Sims"
      },
      {
        "id": 2,
        "name": "Karina Gallagher"
      }
    ],
    "greeting": "Hello, Moody Gould! You have 1 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5707dbf30497ffeb1dea14db",
    "index": 2,
    "guid": "fe5b76f1-9c1e-4373-a27f-9bd10990daa2",
    "isActive": true,
    "balance": "$3,320.23",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "blue",
    "name": "Susanne Little",
    "gender": "female",
    "company": "QUILM",
    "email": "susannelittle@quilm.com",
    "phone": "+1 (839) 485-2551",
    "address": "213 Hawthorne Street, Evergreen, Missouri, 1932",
    "about": "Irure laborum elit proident nostrud sint pariatur. Incididunt aute voluptate et consectetur exercitation est cillum laborum magna ex sunt. Dolor est minim eu mollit est nostrud ut culpa cupidatat qui enim veniam. Lorem reprehenderit amet veniam eu culpa consectetur non velit eiusmod cillum velit nostrud proident aliqua. Ullamco id et sint et ullamco labore proident exercitation. Incididunt amet enim esse qui elit incididunt duis Lorem consequat in mollit enim. Occaecat magna quis ex id eu do et ad enim exercitation aute eiusmod fugiat.\r\n",
    "registered": "2016-02-22T03:29:20 +05:00",
    "latitude": -42.469565,
    "longitude": -76.878292,
    "tags": [
      "minim",
      "esse",
      "esse",
      "commodo",
      "cillum",
      "duis",
      "ad"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ewing Logan"
      },
      {
        "id": 1,
        "name": "Case Langley"
      },
      {
        "id": 2,
        "name": "Robertson Cook"
      }
    ],
    "greeting": "Hello, Susanne Little! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5707dbf3b6d2bdd4f7a87773",
    "index": 3,
    "guid": "9e165622-3faa-4a65-93a5-f8f43f754bfe",
    "isActive": true,
    "balance": "$2,114.05",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "brown",
    "name": "Julie Powell",
    "gender": "female",
    "company": "CENTREGY",
    "email": "juliepowell@centregy.com",
    "phone": "+1 (958) 527-3548",
    "address": "463 Bedford Avenue, Williamson, Georgia, 6796",
    "about": "Duis in eu sunt incididunt reprehenderit est voluptate sit culpa elit sint. Occaecat cillum ex magna aliquip in nostrud ex. Magna nulla labore tempor dolor officia ullamco laboris sunt. Sunt aliquip ullamco proident nostrud sunt dolor duis culpa aliqua.\r\n",
    "registered": "2015-09-25T01:54:22 +04:00",
    "latitude": -56.604973,
    "longitude": -167.22885,
    "tags": [
      "non",
      "aliqua",
      "eu",
      "adipisicing",
      "deserunt",
      "aliqua",
      "nisi"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Blake Cobb"
      },
      {
        "id": 1,
        "name": "Oneil Herrera"
      },
      {
        "id": 2,
        "name": "Alston Richards"
      }
    ],
    "greeting": "Hello, Julie Powell! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5707dbf3e9e41642ae3ee04e",
    "index": 4,
    "guid": "b2d038a3-ea7c-4a4a-b437-6840d1d44460",
    "isActive": false,
    "balance": "$3,957.89",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "green",
    "name": "Roman Petty",
    "gender": "male",
    "company": "KENGEN",
    "email": "romanpetty@kengen.com",
    "phone": "+1 (995) 401-3207",
    "address": "106 Flatbush Avenue, Venice, Virgin Islands, 859",
    "about": "Ex nulla excepteur reprehenderit do esse. Consequat pariatur amet magna quis amet irure laborum quis. Elit minim proident tempor esse Lorem. Voluptate proident fugiat irure quis commodo occaecat. Est deserunt eu incididunt officia nostrud eiusmod sunt.\r\n",
    "registered": "2014-05-09T05:04:34 +04:00",
    "latitude": 16.021011,
    "longitude": 99.500775,
    "tags": [
      "id",
      "nostrud",
      "deserunt",
      "laborum",
      "voluptate",
      "dolor",
      "nostrud"
    ],
    "friends": [
      {
        "id": 0,
        "name": "June Sloan"
      },
      {
        "id": 1,
        "name": "Mcleod Madden"
      },
      {
        "id": 2,
        "name": "Howe Lewis"
      }
    ],
    "greeting": "Hello, Roman Petty! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5707dbf3fcc40126b163595a",
    "index": 5,
    "guid": "27b1d3bc-ed80-4c03-85a1-e0195bdd7d3a",
    "isActive": false,
    "balance": "$2,388.14",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Dean Fleming",
    "gender": "male",
    "company": "PROSELY",
    "email": "deanfleming@prosely.com",
    "phone": "+1 (937) 474-2579",
    "address": "892 Ivan Court, Tuttle, Arkansas, 4393",
    "about": "Dolor nulla mollit occaecat nostrud irure. Do eiusmod fugiat consequat dolore dolore fugiat cupidatat cillum commodo ullamco esse Lorem enim. Sint eiusmod commodo enim labore sit sunt. Consectetur sit reprehenderit sunt consectetur quis officia sunt exercitation. Pariatur ea non mollit Lorem. Consequat amet nostrud dolore et quis ut Lorem reprehenderit in cupidatat velit.\r\n",
    "registered": "2015-04-15T03:10:56 +04:00",
    "latitude": 38.292245,
    "longitude": -75.508583,
    "tags": [
      "laboris",
      "quis",
      "ullamco",
      "dolore",
      "esse",
      "aliquip",
      "nisi"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Slater Jensen"
      },
      {
        "id": 1,
        "name": "Marcy Leach"
      },
      {
        "id": 2,
        "name": "Alba Pierce"
      }
    ],
    "greeting": "Hello, Dean Fleming! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5707dc23745e5ddf0ac8c8ae",
    "index": 0,
    "guid": "e0637554-35ef-4723-9014-9292f3892eba",
    "isActive": true,
    "balance": "$2,709.57",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "green",
    "name": "Tamera Rice",
    "gender": "female",
    "company": "IDEGO",
    "email": "tamerarice@idego.com",
    "phone": "+1 (962) 440-2737",
    "address": "860 Franklin Street, Florence, South Dakota, 238",
    "about": "Ut veniam aliquip fugiat amet nulla pariatur magna sunt non voluptate adipisicing culpa. Magna aute ipsum qui officia cupidatat nostrud labore eu et non. Laborum et ut tempor Lorem irure pariatur dolore qui veniam dolor labore. Exercitation sunt reprehenderit non mollit ipsum velit ad pariatur consectetur enim occaecat do nostrud.\r\n",
    "registered": "2016-01-30T01:03:08 +05:00",
    "latitude": -15.768558,
    "longitude": 135.86511,
    "tags": [
      "fugiat",
      "cillum",
      "eiusmod",
      "ullamco",
      "anim",
      "officia",
      "mollit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Black Houston"
      },
      {
        "id": 1,
        "name": "Trudy Emerson"
      },
      {
        "id": 2,
        "name": "Lily Castillo"
      }
    ],
    "greeting": "Hello, Tamera Rice! You have 4 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5707dc23b239e4423852e2c7",
    "index": 1,
    "guid": "4d120a87-e664-43bc-b055-1cd275aefb48",
    "isActive": true,
    "balance": "$1,791.36",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Veronica Harding",
    "gender": "female",
    "company": "GENMY",
    "email": "veronicaharding@genmy.com",
    "phone": "+1 (802) 427-3779",
    "address": "946 Ocean Avenue, Maybell, Florida, 6742",
    "about": "Nostrud Lorem sunt ea magna exercitation proident velit id irure velit esse ex laboris amet. Do veniam irure Lorem labore qui laboris dolor ea est exercitation. Fugiat veniam id dolor consequat anim laborum commodo id cupidatat. Adipisicing velit quis cupidatat ad aliqua officia laboris velit exercitation est. Nostrud laboris duis est deserunt incididunt aliquip deserunt aliqua in pariatur cillum ex. Et culpa magna velit culpa Lorem enim adipisicing enim ut non consequat consectetur occaecat.\r\n",
    "registered": "2014-07-26T01:40:03 +04:00",
    "latitude": 68.312477,
    "longitude": -13.915682,
    "tags": [
      "ipsum",
      "velit",
      "quis",
      "eu",
      "deserunt",
      "consequat",
      "nostrud"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Tammy Mclean"
      },
      {
        "id": 1,
        "name": "Brandi Sellers"
      },
      {
        "id": 2,
        "name": "Jones Dodson"
      }
    ],
    "greeting": "Hello, Veronica Harding! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5707dc23e44d9cabc1959824",
    "index": 2,
    "guid": "3bf7fc06-917e-4d29-a982-b8df0e1c8e19",
    "isActive": true,
    "balance": "$3,159.76",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": "Myra Long",
    "gender": "female",
    "company": "DEVILTOE",
    "email": "myralong@deviltoe.com",
    "phone": "+1 (958) 498-3716",
    "address": "672 Grimes Road, Carlos, Mississippi, 5413",
    "about": "Voluptate non reprehenderit aliqua quis Lorem veniam esse cupidatat do elit pariatur. Voluptate sunt ipsum Lorem ea cillum laborum fugiat reprehenderit mollit ullamco. Fugiat incididunt aliquip ut quis et veniam est amet commodo. Aliquip do aliqua occaecat consequat culpa adipisicing. Officia sit sunt tempor anim cupidatat pariatur dolore dolore mollit occaecat amet excepteur sint. Esse aliqua quis cupidatat incididunt sint nisi.\r\n",
    "registered": "2014-04-05T06:23:26 +04:00",
    "latitude": 15.782269,
    "longitude": -154.248181,
    "tags": [
      "ipsum",
      "laboris",
      "culpa",
      "deserunt",
      "laboris",
      "cupidatat",
      "amet"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Tisha Farmer"
      },
      {
        "id": 1,
        "name": "Hess Shepherd"
      },
      {
        "id": 2,
        "name": "Simon Sanchez"
      }
    ],
    "greeting": "Hello, Myra Long! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5707dc23e44d9cabc1959824",
    "index": 2,
    "guid": "3bf7fc06-917e-4d29-a982-b8df0e1c8e19",
    "isActive": true,
    "balance": "$3,159.76",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": "Myra Long"
  }
];

Postbox.subscribe('Testing', msg => {
  if (msg.metadata.type === 'publish') {
    recieved[msg.message.packetCount] = {
      latency: Date.now() - msg.message.startTime
    }
  }
});

setInterval(function() {
  document.getElementById('latencyResult').innerHTML = _.meanBy(recieved, function(o) {
    if (o) {
      if(o.latency !== null) {
        return o.latency;
      }
    }
  }) + 'ms';
}, 2000);

var packetCount = 0;
var testInterval;
var start = function(interval, packet) {
  testInterval = setInterval(function() {
    recieved[packetCount + 1] = null;

    Postbox.publish('Testing', {
      startTime: Date.now(),
      packetCount: packetCount + 1,
      payload: packets[packet]
    });
    packetCount += 1;

  }, interval);
}

document.getElementById('start').onclick = function() {
  start(document.getElementById('interval').value, parseInt(document.getElementById('packet').value));
};

document.getElementById('stop').onclick = function() {
  clearInterval(testInterval);
};
