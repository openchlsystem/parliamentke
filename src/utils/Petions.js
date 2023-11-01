// Sample JSON Data
const data = [
  // ... (all the data you've provided)
  {
    "0.": 1,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner:
      "Mr. Peter Kinyua Waweru, Chairperson\nNg’ando PAPs Housing Co- operative Society Limited",
    subject:
      "Completion    of    House Units        for        Kibera Residents  Funded  by  the World Bank\n– P/No. 2 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Thursday 10/11/2022",
    "DATE DUE":
      "Tuesday 25/4/2023\nCommittee sought extension of period\nfor consideration from 8/3/2023 to 25/4/2023 on\n8/3/2023",
    STATUS: "Concluded",
    COMMENTS:
      "Committee report tabled on 27/4/2023 and forwarded to the Petitioners",
  },
  {
    "0.": 2,
    presenter: "The Hon. Said Buya Hiribae, MP (Galole)",
    petitioner: "Residents of Galole, Tana River County",
    subject:
      "Degazettement of Hola Irrigation Scheme Land\n– P/No. 3 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 15/11/2022",
    "DATE DUE":
      "Tuesday 25/4/2023\n(Committee sought extension of period for consideration from 8/3/2023 to 25/4/2023 on 8/3/2023)",
    STATUS: "Pending",
    COMMENTS: "Under consideration",
  },
  {
    "0.": 3,
    presenter:
      "The Rt. Hon.\n(Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner:
      "Mr. Stephen\nMutoro, Secretary General, Consumer Federation of Kenya (COFEK)",
    subject:
      "Funds Spent by\nNational Government Contrary to Provisions of Article 223 of the Constitution\n– P/No. 4 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Tuesday\n15/11/2022",
    "DATE DUE":
      "Tuesday\nTuesday 25/4/2023\n(Committee sought extension of period for consideration from 8/3/2023 to 25/4/2023 on\n8/3/2023)",
    STATUS: "Pending",
    COMMENTS: "Under consideration",
  },
  {
    "0.": 4,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner:
      "Republican Party, Rev. Dennis Ndwiga Nthumbi, Mr. Geoffrey Langat,\nMr. Owuor Steve Gerry",
    subject:
      "Removal of Four Members of the Independent Electoral and Boundaries Commission (IEBC)\n– P/No. 12 of 2022",
    "DATE PRESENTE D/CONVEY ED":
      "Tuesday 15/11/2022.\nReferred to the Departmental Committee on Justice and Legal Affairs(Pursuan t to Standing Order 230(3)",
    "DATE DUE": "Tuesday 01/12/2022",
    STATUS: "Concluded",
    COMMENTS:
      "Report Adopted by the House on 01/12/2022 and forwarded to the President Pursuant to Article 251.",
  },
  {
    "0.": 5,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National\nAssembly",
    petitioner: "Mr. Patrick Kaberia, Executive Director of PAWA Africa",
    subject:
      "Amendment       to     the Universities Act, 2012\n– P/No. 5 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Wednesday 16/11/2022",
    "DATE DUE": "Thursday 16/03/2023",
    STATUS: "Concluded",
    COMMENTS:
      "Committee report tabled on 27/4/2023 and forwarded to the Petitioners",
  },
  {
    "0.": 6,
    presenter: "The Hon. (Dr.)\nJames Nyikal, MP\n(Seme)",
    petitioner: "Nyanza-Western\nCaucus of IDPs",
    subject:
      "Compensation             for\nNyanza-Western     Kenya Caucus      of      Internally Displaced Persons\n– P/No. 6 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Thursday\n16/11/2022",
    "DATE DUE": "Thursday\n16/03/2023",
    STATUS: "Concluded",
    COMMENTS:
      "Committee report\ntabled on 27/7/2023 and forwarded to the Petitioners",
  },
  {
    "0.": 7,
    presenter: "The Hon. Samuel Atandi, MP (Alego Usonga)",
    petitioner:
      "Mrs. (Amb.) Josephine Awuor, Mrs. Caroline Atieno, and Mr. Omondi Abonyo",
    subject:
      "Probable        Loss        of Investments   in   Cytonn High     Yield     Solutions Platform\n– P/No. 7 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Wednesday 16/11/2022",
    "DATE DUE": "Thursday 16/03/2023",
    STATUS: "Concluded",
    COMMENTS:
      "Committee report tabled on 4/5/2023 and forwarded to the Petitioners",
  },
  {
    "0.": 8,
    presenter: "The Hon. Julius Kipletting, MP (Kesses)",
    petitioner: "Forest Communities and Forest Associations across the Country",
    subject:
      "Safeguarding               the Economic     and     Social Welfare                         of\ncommunities   living   next to forests\n– P/No. 1 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 22/11/2022",
    "DATE DUE": "Monday 20/03/2023",
    STATUS: "Concluded",
    COMMENTS:
      "Committee report tabled on 2/8/2023 and forwarded to the Petitioners",
  },
  {
    "0.": 9,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National\nAssembly",
    petitioner: "Pastor Ochieng Odindo",
    subject:
      "EACC    investigation    of West     Kano     Irrigation Scheme\n– P/No. 8 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 22/11/2022",
    "DATE DUE": "Tuesday 18/04/2023",
    STATUS: "Concluded",
    COMMENTS:
      "Committee report tabled on 2/8/2023 and forwarded to the Petitioners",
  },
  {
    "0.": 10,
    presenter: "The Hon. Vincent Musyoka, MP (Mwala)",
    petitioner: "Residents of Mwala Constituency",
    subject:
      "Pollution of River Athi\n– P/No. 11 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 22/11/2022",
    "DATE DUE": "Tuesday 18/04/2023",
    STATUS: "Pending",
    COMMENTS: "Under consideration",
  },
  {
    "0.": 11,
    presenter:
      "The Rt. Hon.\n(Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Mr. Victor Okul",
    subject:
      "Amendment      of      the\nConstitution of Kenya to provide for the Office of Prime   Minister,   Deputy Prime      Minister,      and Leader       of       Official Opposition\n– P/No. 10 of 2022",
    "DATE PRESENTE D/CONVEY ED": "Wednesday\n23/11/2022",
    "DATE DUE": "Wednesday\n19/04/2023",
    STATUS: "Pending",
    COMMENTS:
      "Committee report\ntabled on 10/8/2023 and\nforwarded to the Petitioners",
  },
  {
    "0.": 12,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the\nNational Assembly",
    petitioner: "Ms. Joyce Cherono",
    subject:
      "Poor Implementation of Edu-Afya Medical Scheme in Public Secondary Schools\n– P/No. 1 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 16/2/2023",
    "DATE DUE": "Tuesday 16/5/2023",
    STATUS: "Pending",
    COMMENTS: "Under consideration",
  },
  {
    "0.": 13,
    presenter:
      "The Rt. Hon.\n(Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Mr. Amos Nyasani",
    subject:
      "Management of SGR\nServices\n– P/No. 3 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday\n21/2/2023",
    "DATE DUE": "Tuesday\n23/5/2023",
    STATUS: "Pending",
    COMMENTS: "Under\nconsideration",
  },
  {
    "0.": 14,
    presenter: "The Hon. Tom\nMboya Ondege, MP (Nyatike)",
    petitioner: "Residents of\nNyatike Constituency",
    subject:
      "Delayed adjudication and\nSettlement of Squatters after the expiry of Lease of Macalder Mines Ltd Land\n– P/No. 4 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday\n22/2/2023",
    "DATE DUE": "Tuesday\n22/5/2023",
    STATUS: "Pending",
    COMMENTS: "Under\nconsideration",
  },
  {
    "0.": 15,
    presenter:
      "The Rt. Hon.\n(Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Eng. Victor Okuna",
    subject:
      "Ward Based Solution as a\nlong term remedy to perennial water shortage in Kenya\n– P/No. 5 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Wednesday\n22/2/2023",
    "DATE DUE": "Tuesday\n23/5/2023",
    STATUS: "Pending",
    COMMENTS: "Under\nconsideration",
  },
  {
    "0.": 16,
    presenter:
      "The Rt. Hon.\n(Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Mr. Patrick Kaberia\nExecutive Director PAWA Africa",
    subject:
      "Amendment to the Kenya\nInformation               and Communications      Act– P/No. 6 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday\n02/03/2023",
    "DATE DUE": "Wednesday\n02/6/2023",
    STATUS: "Concluded",
    COMMENTS:
      "Committee report\ntabled on 23/8/2023 and\nforwarded to the Petitioners",
  },
  {
    "0.": 17,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Mr. Fredrick Gaya",
    subject:
      "Gazettement\nof Rachuonyo North as a hardship Area\nP/No. 7 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 02/03/2023",
    "DATE DUE": "Wednesday 02/6/2023",
    STATUS: "Pending",
    COMMENTS: "Under consideration",
  },
  {
    "0.": 18,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner:
      "Dr. Annette Mbogoh Executive Director\nKituo cha Sheria Legal Advice Center",
    subject:
      "Enactment of Legislation to\nCriminalize and prescribe penalties for the crime of enforced disappearance\n– P/No. 8 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 07/03/2023",
    "DATE DUE": "Tuesday 07/6/2023",
    STATUS: "Pending",
    COMMENTS: "Under consideration",
  },
  {
    "0.": 19,
    presenter:
      "The Rt. Hon.\n(Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Mr. Shadrack Agaki\nof",
    subject:
      "State of food security in\nthe country\n– P/No. 9 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday\n07/03/2023",
    "DATE DUE": "Tuesday\n07/6/2023",
    STATUS: "Pending",
    COMMENTS: "Under\nConsideration",
  },
  {
    "0.": 20,
    presenter:
      "The Rt. Hon.\n(Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Mr. Boniface\nOtieno Opere of Tim Kinda Self - Help Group",
    subject:
      "Illegal     acquisition     of\nprivate     land     by     the defunct   Awendo   Town Council\n– P/No. 11 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Wednesday\n8/3/2023",
    "DATE DUE": "Thursday 8/6 2023",
    STATUS: "Pending",
    COMMENTS: "Under\nConsideration",
  },
  {
    "0.": 21,
    presenter: "The Hon. Mary Wamaua, MP\n(Maragwa)",
    petitioner: "Residents of Muthanga Farm Company Limited",
    subject:
      "Resettlement of residents of Muthanga Farm\n– P/No. 10 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 16/3/2023",
    "DATE DUE": "Thursday 15/6/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 22,
    presenter: "The Hon.\nEdith Nyenze, MP (Kitui West)",
    petitioner: "Residents\nof Kitui West Constituency",
    subject:
      "Desiltation of Matinga\nDam in Kitui West Constituency\n– P/No. 12 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday\n16/3/2023",
    "DATE DUE": "Thursday\n15/6/2023",
    STATUS: "Concluded",
    COMMENTS:
      "Committee report\ntabled on 27/7/2023 and forwarded to the Petitioners",
  },
  {
    "0.": 23,
    presenter: "The Hon.\nAramat Lemanken, MP (Narok East)",
    petitioner: "Residents of Narok\nEast Constituency",
    subject:
      "Access roads for\nresidents\nof Narok East Constituency\n– P/No. 13 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday\n16/3/2023",
    "DATE DUE": "Thursday\n15/6/2023",
    STATUS: "Pending",
    COMMENTS: "Under\nConsideration",
  },
  {
    "0.": 24,
    presenter: "The Hon. Owen\nYaa Baya CBS, MP (Kilifi North)",
    petitioner: "Residents of Kilifi\nNorth Constituency",
    subject:
      "Delayed adjudication and\nsettlement of residents of Mnarani Sublocation, Kilifi County under absentee landlord.\n– P/No. 14 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday\n18/4/2023",
    "DATE DUE": "Tuesday\n18/7/2023",
    STATUS: "Pending",
    COMMENTS: "Under\nConsideration",
  },
  {
    "0.": 25,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Hon. Francis Ngunga",
    subject:
      "Punitive charges levied by the      Kenya      National Highways Athority\n– P/No. 23 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 14/6/2023",
    "DATE DUE": "Tuesday 14/9/202",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 26,
    presenter: "The Hon. Ali\nWario, MP (Garsen)",
    petitioner: "Residents of Garsen\nConstituency",
    subject:
      "Review of Boundaries of\nthe Tana Delta\n– P/No. 31 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday\n14/6/2023",
    "DATE DUE": "Tuesday 14/9/202",
    STATUS: "Pending",
    COMMENTS: "Under\nConsideration",
  },
  {
    "0.": 27,
    presenter:
      "The Rt. Hon.\n(Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Consortiam of\nPetitioners from Juja and Ruiru Constituencies",
    subject:
      "Tarmacking of Kiganjo-\nMugutha- Gwakairu Link Road\n– P/No. 32 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday\n22/6/2023",
    "DATE DUE": "Thursday\n21/9/2023",
    STATUS: "Pending",
    COMMENTS: "Under\nConsideration",
  },
  {
    "0.": 28,
    presenter: "The Hon. Owen Yaa Baya CBS, MP (Kilifi North)",
    petitioner: "Residents of Kilifi North Constituency",
    subject:
      "Delayed adjudication and settlement of residents of Misufini, Vibandani and Kibarani Sub location, Tezo Location, Kilifi North Constituency.\n– P/No. 36 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 29/6/2023",
    "DATE DUE": "Thursday 28/9/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 29,
    presenter: "The Hon.Bady Twalib Bady, MP\n(Jomvu)",
    petitioner: "Residents of Jomvu Constituency",
    subject:
      "Compensation of person affected by Mombasa- Mariakani Road Dualing Project\n– P/No. 33 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 4/7/2023",
    "DATE DUE": "Tuesday 3/10/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 30,
    presenter: "The Hon. Flowrence Jematia Sergon, MP\n(Baringo County)",
    petitioner: "Residents of Baringo County",
    subject:
      "Declaration of Mukutani Forest as a Public Forest\n– P/No. 15 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 6/7/2023",
    "DATE DUE": "Thursday 5/10/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 31,
    presenter: "The Hon.\nTimothy Kipchumba Toroitich, MP(Marakwet West)",
    petitioner: "Resident of\nMarakwet West Constituency",
    subject:
      "Deregistration and\ndismissal of Mr. Joseph Kimeli Chebii by the Teachers Service Commission\n– P/No. 34 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday\n27/7/2023",
    "DATE DUE": "Thursday\n26/10/2023",
    STATUS: "Pending",
    COMMENTS: "Under\nConsideration",
  },
  {
    "0.": 32,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Mr. Ibrahim Nthitu Makwattah",
    subject:
      "Compensation of compulsory acquired land and properties along Kibwezi - Kitui Road\n– P/No. 35 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 1/8/2023",
    "DATE DUE": "Thursday 2/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 33,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner: "Centre for Accountability, Reform and Democracy",
    subject:
      "Delimitation of Electoral Units\n– P/No. 40 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 10/8/2023",
    "DATE DUE": "Thursday 9/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 34,
    presenter: "The Hon. Adams Kipsanai, MP\n(Keiyo North)",
    petitioner: "Residents of Keiyo North Constituency",
    subject:
      "Human Wildlife conflict in Keiyo North Constituency\n– P/No. 43 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 10/8/2023",
    "DATE DUE": "Thursday 9/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 35,
    presenter: "The Hon. Owen Baya Yaa, MP (Kilifi North)",
    petitioner:
      "Teachers of both Secondary and Primary\nSchools residing in Kilifi Municipality",
    subject:
      "Enhancement of House allowances for\nteachers working and residing within Kilifi Municipality\n– P/No. 44 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 10/8/2023",
    "DATE DUE": "Thursday 9/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 36,
    presenter:
      "The Rt. Hon. (Dr.) Moses Wetang’ula, MP (Speaker of the National Assembly",
    petitioner:
      "Mr. Bob Ndolo, the Chief Executive Officer of the Bridge Connect Consultancy",
    subject:
      "Banning of Tiktok in Kenya\n– P/No. 41 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 15/8/2023",
    "DATE DUE": "Wednesday 15/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 37,
    presenter: "The Hon. Chiforomodo Managale, MP (Lungalunga)",
    petitioner: "Residents of Lungalunga Constituency",
    subject:
      "Delayed Adjudication and Settlement of residents of Kidomaya/Miungoni Village in Vanga Ward in Lungalunga Constituency\n– P/No. 45 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 15/8/2023",
    "DATE DUE": "Wednesday 15/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 38,
    presenter: "The Hon. Peter Mbogo, MP (Mwatate Constituency)",
    petitioner: "Retired Teachers",
    subject:
      "Payment of retirement dues and pension for retired teachers\n– P/No. 46 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Wednesday 16/8/2023",
    "DATE DUE": "Thursday 16/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 39,
    presenter: "The Hon. Charles Nguna, MP\n(Mwingi West Constituency)",
    petitioner: "Classroom Teachers deployed as Head Teachers in Schools",
    subject:
      "Deployment of Classroom Teachers as Head Teachers in Schools across the Country\n– P/No. 47 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Wednesday 16/8/2023",
    "DATE DUE": "Thursday 16/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 40,
    presenter: "The Hon. Dr. Charles M. Onchoke,MP (Bonchari Constituency)",
    petitioner: "Mr. Benson Asiago Mocheo",
    subject:
      "Delayed Payment of Pension by the Kenya Railways Corporation\n– P/No. 50 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 17/8/2023",
    "DATE DUE": "Thursday 21/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 41,
    presenter: "The Hon. Protus Akujah,MP (Loima Constituency)",
    petitioner: "Concerned Citizens of Republic of Kenya",
    subject:
      "41 Kenyans Court Martialed  and convicted for Eight Years Imprisonment in Uganda\n– P/No. 49 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Tuesday 22/8/2023",
    "DATE DUE": "Wednesday 22/11/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 42,
    presenter: "The Hon. Ibrahim Abdi, MP\n(Wajir North Constituency)",
    petitioner:
      "Residents of Wajir North Constituency and other affected parts of the country\n– P/No. 52 of 2023",
    subject:
      "Ban of the Use Asbestos as a Roofing Material\n– P/No. 52 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 28/9/2023",
    "DATE DUE": "Tuesday 13/2/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 43,
    presenter: "The Hon. John Bwire Okano,MP (Taveta Constituency)",
    petitioner:
      "Pastoral Community from Mata and Challa Wrads in Taita Taveta Constituency",
    subject:
      "Access to National Parks by Livestock Grazers During Drought\n– P/No. 53 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Wednesday 4/10/2023",
    "DATE DUE": "Wednesday 10/01/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 44,
    presenter: "The Hon. Protus Akujah,MP (Loima Constituency)",
    petitioner: "Concerned Citizens of Republic of Kenya",
    subject:
      "Compromised Safety Standards of Planes Operated by Skyward Express PLC\n– P/No. 48 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Wednesday 18/10/2023",
    "DATE DUE": "Tuesday 19/12/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 45,
    presenter:
      "The Hon. Gladys\nJ. Boss, MGH,MP (The Hon. Deputy Speaker of the National Assembly)",
    petitioner:
      "Teachers teaching in special learning institutions across the Country",
    subject:
      "Unlawful deductions by Teachers Service Commission (TSC) in favour of Kenya Union of the Special Needs Education Teachers(KUSNET)\n– P/No. 54 of  2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday 5/10/2023",
    "DATE DUE": "Thursday 11/01/2023",
    STATUS: "Pending",
    COMMENTS: "Under Consideration",
  },
  {
    "0.": 46,
    presenter:
      "The Hon. Gladys J.\nBoss, MGH,MP\n(The Hon. Deputy Speaker of the National Assembly)",
    petitioner: "Mr. Benard Mokaya\nMagembe",
    subject:
      "Enactment of Legislation\nto Regulate the Credit Professionals\n– P/No. 55 of 2023",
    "DATE PRESENTE D/CONVEY ED": "Thursday\n5/10/2023",
    "DATE DUE": "Thursday\n11/01/2023",
    STATUS: "Pending",
    COMMENTS: "Under\nConsideration",
  },
];

// Function to convert date strings to JavaScript Date objects
function convertDatesToObjects(data) {
  const newData = data.map((item) => {
    // Convert "DATE PRESENTED/CONVEYED" to Date object
    const presentedDate = item["DATE PRESENTED/CONVEYED"]?.replace(/[^0-9/]/g, "");
    item["DATE PRESENTED/CONVEYED"] = presentedDate ? new Date(presentedDate) : null;

    // Convert "DATE DUE" to Date object
    const dueDate = item["DATE DUE"]?.replace(/[^0-9/]/g, "");
    item["DATE DUE"] = dueDate ? new Date(dueDate) : null;

    return item;
  });

  return newData;
}

try {
  const transformedData = convertDatesToObjects(data);
  // Export the transformed data as a module
  module.exports = { transformedData };
} catch (error) {
  console.error("Error converting dates:", error);
}

