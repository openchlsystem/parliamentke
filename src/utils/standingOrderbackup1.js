const data = [
  {
    text_id: 1,
    date: "2023-10-23T20:12:00Z",
    document: "Standing Orders",
    heirarchy: "Document",
    content: "INTRODUCTORY",
    parent: null,
  },
  {
    text_id: 2,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "SWEARING-IN OF MEMBERS AND ELECTION OF SPEAKER",
    heirarchy: "Part",
    parent: 1,
  },
  {
    text_id: 3,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "VACATION OF OFFICE OF SPEAKER AND DEPUTY SPEAKER",
    heirarchy: "Part",
    parent: 2,
  },
  {
    text_id: 4,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "DEPUTY SPEAKER AND CHAIRPERSON OF COMMITTEES",
    heirarchy: "Part",
    parent: 3,
  },
  {
    text_id: 5,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content:
      "THE LEADER OF THE MAJORITY party AND THE LEADER OF THE MINORITY party",
    heirarchy: "Part",
    parent: 4,
  },
  {
    text_id: 6,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "ADDRESS BY PREStext_idENT, VISITING DIGNITARY OR OTHER PERSONS",
    heirarchy: "Part",
    parent: 5,
  },
  {
    text_id: 7,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "CALENDAR,SITTINGS AND ADJOURNMENTS OF THE HOUSE",
    heirarchy: "Part",
    parent: 6,
  },
  {
    text_id: 8,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "QUORUM OF THE HOUSE",
    heirarchy: "Part",
    parent: 7,
  },
  {
    text_id: 9,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "ORDER OF BUSINESS",
    heirarchy: "Part",
    parent: 8,
  },
  {
    text_id: 10,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "MESSAGES",
    heirarchy: "Part",
    parent: 9,
  },
  {
    text_id: 11,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "QUESTIONS",
    heirarchy: "Part",
    parent: 10,
  },
  {
    text_id: 12,

    date: "2023-10-23T07:20:13.111650Z",
    content: "STATEMENTS",
    document: "Standing Orders",
    heirarchy: "Part",
    parent: 11,
  },
  {
    text_id: 13,
    date: "2023-10-23T07:20:13.111650Z",

    document: "Standing Orders",
    content: "partX1—APPROVAL OF PUBLIC APPOINTMENTS",
    heirarchy: "Part",
    parent: 12,
  },
  {
    text_id: 14,
    date: "2023-10-23T07:20:13.111650Z",

    document: "Standing Orders",
    content: "APPROVAL OF PUBLIC APPOINTMENTS",
    heirarchy: "Part",
    parent: 13,
  },
  {
    text_id: 15,
    date: "2023-10-23T07:20:13.111650Z",
    content: "MOTIONS",
    document: "Standing Orders",
    heirarchy: "Part",
    parent: 14,
  },
  {
    text_id: 16,
    date: "2023-10-23T07:20:13.111650Z",

    document: "Standing Orders",
    content: "PROCEDURE FOR REMOVAL FROM STATE OFFICE",
    heirarchy: "Part",
    parent: 15,
  },
  {
    text_id: 17,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "VOTING AND DIVISIONS",
    heirarchy: "Part",
    parent: 16,
  },
  {
    text_id: 18,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "RULES OF DEBATE",
    heirarchy: "Part",
    parent: 17,
  },
  {
    text_id: 19,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "LIMITATION OF DEBATE",
    heirarchy: "Part",
    parent: 18,
  },
  {
    text_id: 20,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "ORDER IN THE HOUSE AND IN COMMITTEE OF THE WHOLE HOUSE",
    heirarchy: "Part",
    parent: 19,
  },
  {
    text_id: 21,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "PUBLIC BILLS",
    heirarchy: "Part",
    parent: 20,
  },
  {
    text_id: 22,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "PRIVATE BILLS",
    heirarchy: "Part",
    parent: 21,
  },
  {
    text_id: 23,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "COMMITTEE OF THE WHOLE HOUSE",
    heirarchy: "Part",
    parent: 22,
  },
  {
    text_id: 24,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "SELECT COMMITTEES",
    heirarchy: "Part",
    parent: 23,
  },
  {
    text_id: 25,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "PUBLIC PETITIONS",
    heirarchy: "Part",
    parent: 24,
  },
  {
    text_id: 26,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content:
      "PETITION FOR REMOVAL OF A MEMBER OF A COMMISSION OR INDEPENDENT OFFICE",
    heirarchy: "Part",
    parent: 25,
  },
  {
    text_id: 27,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "FINANCIAL PROCEDURES",
    heirarchy: "Part",
    parent: 26,
  },
  {
    text_id: 28,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "JOURNALS,RECORDS AND BROADCAST OF PROCEEDINGS",
    heirarchy: "Part",
    parent: 27,
  },
  {
    text_id: 29,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "PUBLIC ACCESS TO THE HOUSE AND ITS COMMITTEES",
    heirarchy: "Part",
    parent: 28,
  },
  {
    text_id: 30,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "GENERAL",
    heirarchy: "Part",
    parent: 29,
  },
  {
    text_id: 31,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "AMENDMENT OF Standing OrdersS",
    heirarchy: "Part",
    parent: 30,
  },
  {
    text_id: 32,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "CONDUCT OF PROCEEDINGS IN EXCEPTIONAL CIRCUMSTANCES",
    heirarchy: "Part",
    parent: 31,
  },
  {
    text_id: 33,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "TRANSITIONAL PROVISIONS",
    heirarchy: "Part",
    parent: 32,
  },
  {
    text_id: 34,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "FIRST SCHEDULE",
    heirarchy: "Part",
    parent: 33,
  },
  {
    text_id: 35,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "SECOND SCHEDULE",
    heirarchy: "Part",
    parent: 34,
  },
  {
    text_id: 36,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "THIRD SCHEDULE",
    heirarchy: "Part",
    parent: 35,
  },
  {
    text_id: 37,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "FOURTH SCHEDULE",
    heirarchy: "Part",
    parent: 36,
  },
  {
    text_id: 38,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "FIFTH SCHEDULE",
    heirarchy: "Part",
    parent: 37,
  },
  {
    text_id: 39,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "SEVENTH SCHEDULE",
    heirarchy: "Part",
    parent: 38,
  },
  {
    text_id: 40,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    content: "EIGHTH SCHEDULE",
    heirarchy: "Part",
    parent: 39,
  },

  {
    text_id: 41,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "In cases not provided for, the Speaker to decide",
    parent: 1,
  },
  {
    text_id: 42,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Interpretation",
    parent: 1,
  },

  {
    text_id: 43,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "The Mace",
    parent: 1,
  },
  {
    text_id: 44,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Header",
    content: "Proceedings on assembly of a new House",
    parent: 2,
  },
  {
    text_id: 45,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Vacancy in the Office of Speaker",
    parent: 2,
  },
  {
    text_id: 46,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Nomination of candidates",
    parent: 2,
  },
  {
    text_id: 47,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Secret ballot",
    parent: 2,
  },
  {
    text_id: 48,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Election threshold",
    parent: 2,
  },
  {
    text_id: 49,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Withdrawal of candtext_idate",
    parent: 2,
  },
  {
    text_id: 50,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Equality of votes",
    parent: 2,
  },
  {
    text_id: 51,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Custody of ballot papers",
    parent: 2,
  },
  {
    text_id: 52,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Single duly nominated candtext_idate",
    parent: 2,
  },
  {
    text_id: 53,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Swearing-in of the Speaker",
    parent: 2,
  },
  {
    text_id: 54,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Resignation",
    parent: 3,
  },
  {
    text_id: 55,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Removal from Office",
    parent: 3,
  },
  {
    text_id: 56,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Election of Deputy Speaker",
    parent: 4,
  },
  {
    text_id: 57,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Notification of opening of Parliament",
    parent: 4,
  },
  {
    text_id: 58,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Chairperson of Committees of the whole House",
    parent: 4,
  },
  {
    text_id: 59,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Chairpersons Panel",
    parent: 4,
  },
  {
    text_id: 60,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Discharge of a Member from Chairpersons Panel",
    parent: 4,
  },
  {
    text_id: 61,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Presiding in the House",
    parent: 4,
  },
  {
    text_id: 62,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content:
      "Leader of the Majority Party and Deputy Leader of the Majority Party",
    parent: 5,
  },
  {
    text_id: 63,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content:
      "Leader of the Minority Party and Deputy Leader of the Minority Party",
    parent: 5,
  },
  {
    text_id: 64,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Presidents address on opening of new Parliament",
    parent: 6,
  },
  {
    text_id: 65,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "President address on special sittings",
    parent: 6,
  },
  {
    text_id: 66,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "President entering or leaving the Chamber",
    parent: 6,
  },
  {
    text_id: 67,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Presidents address to Parliament",
    parent: 6,
  },
  {
    text_id: 68,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Visiting dignitary",
    parent: 6,
  },
  {
    text_id: 69,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content:
      "Designation of a place in the Chamber for Cabinet Secretaries and other persons",
    parent: 6,
  },
  {
    text_id: 70,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Location of the first sitting of a new House",
    parent: 7,
  },
  {
    text_id: 71,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Regular Sessions of the House",
    parent: 7,
  },
  {
    text_id: 72,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Calendar of the Assembly",
    parent: 7,
  },
  {
    text_id: 73,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Special sittings of the House",
    parent: 7,
  },
  {
    text_id: 74,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Hours of meeting",
    parent: 7,
  },
  {
    text_id: 75,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Adjournment of the House",
    parent: 7,
  },
  {
    text_id: 76,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Adjournment on definite matter of urgent national importance",
    parent: 7,
  },
  {
    text_id: 77,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Quorum at commencement of the House",
    parent: 6,
  },
  {
    text_id: 78,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Quorum during the proceedings of the House",
    parent: 8,
  },
  {
    text_id: 79,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Quorum during voting or division",
    parent: 8,
  },
  {
    text_id: 80,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Decorum when quorum not present",
    parent: 8,
  },
  {
    text_id: 81,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Order Paper to be prepared and circulated",
    parent: 9,
  },
  {
    text_id: 82,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Weekly programmes of the business of the National Assembly",
    parent: 9,
  },
  {
    text_id: 83,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Sequence of proceedings",
    parent: 9,
  },
  {
    text_id: 84,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Messages to and from the Senate",
    parent: 10,
  },
  {
    text_id: 85,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Messages from the President",
    parent: 10,
  },
  {
    text_id: 86,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Notice of Question",
    parent: 11,
  },
  {
    text_id: 87,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "General rules on Questions",
    parent: 11,
  },
  // Continue with the rest of your data...
  {
    text_id: 88,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Timeline for reply",
    parent: 11,
  },
  {
    text_id: 89,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Report on Questions",
    parent: 11,
  },
  {
    text_id: 90,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Statement Hour",
    parent: 12,
  },
  {
    text_id: 91,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Committal to committees",
    parent: 13,
  },
  {
    text_id: 92,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Application",
    parent: 14,
  },
  {
    text_id: 93,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Notices of Motions",
    parent: 14,
  },
  {
    text_id: 94,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Amendment of Notice of Motion",
    parent: 14,
  },
  {
    text_id: 95,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Certain Motions not to be moved",
    parent: 14,
  },
  {
    text_id: 96,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Time for moving Motions",
    parent: 14,
  },
  {
    text_id: 97,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Motion withdrawn may be moved again",
    parent: 14,
  },
  {
    text_id: 98,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Motions which may be moved without Notice",
    parent: 14,
  },
  {
    text_id: 99,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Manner of debating Motions",
    parent: 14,
  },
  {
    text_id: 100,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Amendments to be made",
    parent: 14,
  },
  {
    text_id: 101,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Amendments to be in writing",
    parent: 14,
  },
  {
    text_id: 102,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Amendments to be relevant to Motion",
    parent: 14,
  },
  {
    text_id: 103,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Question proposed after Motion made",
    parent: 14,
  },
  {
    text_id: 104,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Motion in possession of the House",
    parent: 14,
  },
  {
    text_id: 105,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Question as amended put",
    parent: 14,
  },
  {
    text_id: 106,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "When amendment proposed but not made",
    parent: 14,
  },
  {
    text_id: 107,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Procedure for removal of President on grounds of incapacity",
    parent: 16,
  },
  {
    text_id: 108,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Procedure for removal of Prestext_ident by impeachment",
    parent: 16,
  },
  {
    text_id: 109,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Procedure for removal of Deputy Prestext_ident",
    parent: 16,
  },
  {
    text_id: 110,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Procedure for removal of Cabinet Secretary",
    parent: 16,
  },
  {
    text_id: 111,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Right to be heard",
    parent: 16,
  },
  {
    text_id: 112,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Priority of Motion",
    parent: 16,
  },
  {
    text_id: 113,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Voting in the House",
    parent: 17,
  },
  {
    text_id: 114,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Technical failure, confusion or error occurring",
    parent: 17,
  },
  {
    text_id: 115,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Roll call Division claimed",
    parent: 17,
  },
  {
    text_id: 116,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Roll call voting",
    parent: 17,
  },
  {
    text_id: 117,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "In case of confusion or error",
    parent: 17,
  },
  {
    text_id: 118,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Errors corrected",
    parent: 17,
  },
  {
    text_id: 119,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Decorum during division",
    parent: 17,
  },
  {
    text_id: 120,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content:
      ". Proceedings to be in Kiswahili, English or Kenyan Sign Language",
    parent: 18,
  },
  {
    text_id: 121,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Members to address the Speaker",
    parent: 18,
  },
  {
    text_id: 122,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Two or more Members requesting to speak",
    parent: 18,
  },
  {
    text_id: 123,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Speeches may not be read",
    parent: 18,
  },
  {
    text_id: 124,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "No Member to speak after Question put",
    parent: 18,
  },
  {
    text_id: 125,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Speaking twice to a Question",
    parent: 18,
  },
  {
    text_id: 126,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Member who has spoken to question may speak to amendment",
    parent: 18,
  },
  {
    text_id: 127,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Debate on amendment confined to amendment",
    parent: 18,
  },
  {
    text_id: 128,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Reserving rights of speech",
    parent: 18,
  },
  {
    text_id: 129,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Points of Order",
    parent: 18,
  },
  {
    text_id: 130,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Personal Statements",
    parent: 18,
  },
  {
    text_id: 131,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Anticipating debate",
    parent: 18,
  },
  {
    text_id: 132,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Proceedings of Select Committees not to be referred to",
    parent: 18,
  },
  {
    text_id: 133,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "content of speeches",
    parent: 18,
  },
  {
    text_id: 134,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Retraction and Apologies",
    parent: 18,
  },
  {
    text_id: 135,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Matters sub judice or secret",
    parent: 18,
  },
  {
    text_id: 136,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Declaration of interest",
    parent: 18,
  },
  {
    text_id: 137,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Responsibility for statement of fact",
    parent: 18,
  },
  {
    text_id: 138,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Closure of debate",
    parent: 18,
  },
  {
    text_id: 139,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Resumption of interrupted business",
    parent: 18,
  },
  {
    text_id: 140,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Adjournment of debate",
    parent: 18,
  },
  {
    text_id: 141,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Header",
    content: "Resumption of interrupted business",
    parent: 19,
  },
  {
    text_id: 142,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "In all cases where matters are not expressly provtext_ided for by these Standing Orderss or by other Orders of the House, any procedural question shall be dectext_ided by the Speaker.",
    parent: 41,
  },
  {
    text_id: 143,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The decisions made in Paragraph (1) shall be based on the Constitution of Kenya, statute law and the usages, forms, precedents, customs, procedures, traditions and practices of the Parliament of Kenya and other jurisdictions to the extent that these are applicable to Kenya",
    parent: 41,
  },
  {
    text_id: 144,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "“Allotted Day” means a day set astext_ide for the constext_ideration in Committee of Supply of proposals in respect of the Annual and Supplementary Estimates, as provied by Part XXIV of these Standing Orderss",
    parent: 42,
  },
  {
    text_id: 145,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Broadcast” includes the live transmission of the proceedings of the House by radio, television or webcast;",
    parent: 42,
  },
  {
    text_id: 146,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Cabinet Secretary” means a person appointed as a Cabinet Secretary under Article 152(2) of the Constitution",
    parent: 42,
  },
  {
    text_id: 147,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Clerk” means the Clerk of the Assembly, or, if the Clerk is absent, or if the office is vacant, such other person as is for the time being performing the duties of the Clerk;",
    parent: 42,
  },
  {
    text_id: 148,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Leave of the House” means there being no objection by any Member, either with the sympathy of the Speaker or with the support of at least five other Members;",
    parent: 42,
  },
  {
    text_id: 149,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Leader of the Majority Party” means the person who is the leader in the National Assembly of the largest party or coalition of parties under Standing Orders 19 (Leader of Majority Party and Deputy Leader of Majority Party);",
    parent: 42,
  },
  {
    text_id: 150,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Leader of the Minority Party” means the person who is the leader in the National Assembly of the second largest party or coalition of parties under Standing Orders 20 (Leader of Minority Party and Deputy Leader of Minority Party);",
    parent: 42,
  },
  {
    text_id: 151,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Majority Party” means the largest party or coalition of parties in the National Assembly;",
    parent: 42,
  },
  {
    text_id: 152,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Majority Whip” means the Member designated as the Majority Whip by the Leader of the Majority Party;",
    parent: 42,
  },
  {
    text_id: 153,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content: "“Member” means a member of the National Assembly;",
    parent: 41,
  },
  {
    text_id: 154,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Minority Party” means the second largest party or coalition of parties in the National Assembly",
    parent: 42,
  },
  {
    text_id: 155,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Minority Whip” means the Member designated as the Minority Whip by the Leader of the Minority Party",
    parent: 42,
  },
  {
    text_id: 156,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Notice Paper” means the official schedule of business intended to be transacted by the Assembly during a particular week, published and circulated by the Clerk by order of the House Business Committee under Standing Orders 38 (Order Paper to be prepared and circulated);",
    parent: 42,
  },
  {
    text_id: 157,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Order Paper” means the paper showing the business to be placed before or taken by the House on a particular day, published and circulated by the Clerk under Standing Orders 38 (Order Paper to be prepared and circulated);",
    parent: 41,
  },
  {
    text_id: 158,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Paper” means any printed or electronic material latext_id on the Table of the House or a committee of the House pursuant to any law or these Standing Orderss or any other material as the Speaker may determine",
    parent: 42,
  },
  {
    text_id: 159,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Parliamentary Party” means a party or a coalition of parties consisting of not less than five percent of the membership of the National Assembly",
    parent: 41,
  },
  {
    text_id: 160,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Party Whip” means a Member designated by a parliamentary party as its party whip for the purposes of the transaction of the business in the House and includes the Majority Whip and the Minority Whip",
    parent: 41,
  },
  {
    text_id: 161,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Precincts of Parliament” includes the Chamber of the National Assembly and of the Senate, every part of the buildings in which the Chambers are situated, the offices of Parliament, the galleries and places provtext_ided for the use and accommodation of Members of Parliament, members of the public and representatives of the Press and any forecourt, yard, garden, enclosure or open space, appurtenant thereto and used or provtext_ided for the purposes of Parliament",
    parent: 42,
  },
  {
    text_id: 162,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“President” means the President of the Republic of Kenya and includes the Deputy-Prestext_ident when acting as Prestext_ident and any other person who for the time being performs the functions of the Prestext_ident pursuant to Article 146(2) of the Constitution;",
    parent: 42,
  },
  {
    text_id: 163,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Private Bill” means any Bill, which is intended to affect or benefit some particular person, association or corporate body;",
    parent: 42,
  },
  {
    text_id: 164,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Public Bill” means a Bill which is intended to affect the public generally, or a section of the public;",
    parent: 42,
  },
  {
    text_id: 165,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Recess” means a period during which the House stands adjourned to a day other than the next normal sitting day;",
    parent: 42,
  },
  {
    text_id: 166,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Session” means the sittings of the House commencing when it first meets after a General Election or on a day provtext_ided for in Standing Orders 27 (Regular Sessions of the House) and terminating when the National Assembly adjourns at the end of a calendar year or at the expiry of the term of Parliament;",
    parent: 42,
  },
  {
    text_id: 167,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Sitting” means a period during which the House is sitting continuously without adjournment and includes any period during which the House is in Committee; but two or more periods of sitting within the normal period of one sitting, or within an equivalent period, shall not rank as more than one sitting;",
    parent: 42,
  },
  {
    text_id: 168,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "“Sitting day” means any day on which the Assembly sits;\n(b) reference to the Chairperson of Committees includes the Speaker when prestext_iding over a Committee of the whole House or any other Member for the time being so prestext_iding;\n(c) reference to the Speaker includes the Deputy Speaker or any other Member when prestext_iding over the Assembly pursuant to Article 107 of the Constitution",
    parent: 42,
  },
  {
    text_id: 169,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "In these Standing Orderss, whenever a document is required to be provtext_ided or made available to Members, the document shall be constext_idered to have been so provtext_ided or made available if placed in the Members’ pigeon holes or in such other manner as the Speaker may direct.",
    parent: 42,
  },
  {
    text_id: 170,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Mace of the House embodies the authority of the Speaker and the House and shall be kept in safe custody by the Serjeant-at-Arms.",
    parent: 43,
  },
  {
    text_id: 171,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "On the first sitting of a new House pursuant to the Prestext_ident’s notification under Article 126(2) of the Constitution, the Clerk shall—\n(a) read the notification of the Prestext_ident as published in the Gazette;\n(b) lay a list of the names of the persons elected as Members on the Table of the House; and\n(c) administer the Oath or Affirmation of Office provtext_ided for in the Third Schedule to the Constitution to all members present in the House in the order set out in Paragraph (2).",
    parent: 44,
  },
  {
    text_id: 172,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Clerk shall administer the Oath or Affirmation of Office to Members in alphabetical order using the following order of precedence—\n(a) Members with the longest cumulative period of service in the Assembly;\n(b) Members with the longest cumulative period of service in the National Assembly, East African Legislative Assembly and the Senate;\n(c) Members with the longest cumulative period of service in the Senate;\n(d) all other Members.",
    parent: 44,
  },
  {
    text_id: 173,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Pursuant to the provisions of Article 74 of the Constitution, no person shall assume or perform any functions of the office of a Member before taking and subscribing to the Oath or Affirmation of Office provtext_ided for under Paragraph (1).",
    parent: 44,
  },
  {
    text_id: 174,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "When the Clerk is administering the Oath or Affirmation of Office to Members and before the Clerk has administered the Oath or Affirmation of Office to the Speaker, any question arising in the House shall be determined by the Clerk who shall, during that period, exercise the powers of the Speaker",
    parent: 44,
  },
  {
    text_id: 175,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "At any other time, the Oath or Affirmation of Office shall be administered by the Speaker immediately after prayers",
    parent: 44,
  },
  {
    text_id: 176,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "When a Member first attends to take his or her seat after the first sitting of the House, the Member shall, before taking his or her seat, be escorted to the Table by two Members and be presented by them to the Speaker who shall then administer to the Member the Oath or Affirmation of Office",
    parent: 44,
  },
  {
    text_id: 177,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Notwithstanding Standing Orders 30 (Hours of Meeting), on the day when the election of the Speaker is to be conducted after a general election, the sitting of the House shall commence at 9.00 am.",
    parent: 44,
  },
  {
    text_id: 178,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Speaker shall be elected when the House first meets after a General Election and before the House proceeds with the dispatch of any other business, except the administration of the Oath or Affirmation of Office to Members present.",
    parent: 45,
  },
  {
    text_id: 179,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If the office of Speaker falls vacant at any time before the expiry of the term of Parliament, no business shall be transacted by the House until the election of a new Speaker.",
    parent: 45,
  },
  {
    text_id: 180,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "The Deputy Speaker shall prestext_ide over the election under Paragraph (2) but if the Deputy Speaker is a candtext_idate, a Member elected by the House in accordance with Article 107 of the Constitution",
    parent: 45,
  },
  {
    text_id: 181,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Upon the Prestext_ident notifying the place and date for the first sitting of a new Assembly pursuant to Article 126(2) of the Constitution, the Clerk shall by notice in the Gazette notify that fact and invite interested persons to submit their",
    parent: 46,
  },
  {
    text_id: 182,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "The names of candtext_idates for election to the office of Speaker shall be entered upon nomination papers obtained from the Clerk and handed back to the Clerk, at least forty-eight hours before the time appointed at which the House is to meet to elect a Speaker.",
    parent: 46,
  },
  {
    text_id: 183,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "The nomination papers of a candtext_idate shall be accompanied by the names and signatures of twenty Members who support the candtext_idate and a declaration by them that the candtext_idate is qualified to be elected as a Member of Parliament under Article 99 of the Constitution and is willing to serve as Speaker of the National Assembly",
    parent: 46,
  },
  {
    text_id: 184,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Clerk shall maintain a register in which shall be shown the date and time when each candtext_idates nomination papers were received and shall ascertain that every such candtext_idate for election to the office of Speaker is qualified to be elected as such under Article 106 of the Constitution",
    parent: 46,
  },
  {
    text_id: 185,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Immediately upon the close of the nomination period provtext_ided for in Paragraph (2), the Clerk shall\n(a) publicize and make available to all Members, a list showing all qualified candtext_idates; and\n(b) make available to all Members, copies of the curriculum vitae of the qualified candtext_idates.",
    parent: 46,
  },
  {
    text_id: 186,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Clerk shall, at least two hours before the meeting of the Assembly, prepare ballot papers upon which shall be shown the names of all candtext_idates valtext_idly nominated under Paragraph (5) of this Standing Orders",
    parent: 46,
  },
  {
    text_id: 187,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content: "The election of the Speaker shall be by secret ballot.",
    parent: 47,
  },
  {
    text_id: 188,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Clerk shall, at the commencement of each ballot, cause the ballot box, empty and unlocked, to be displayed to the House and shall, in the presence of the House, lock the box, which shall thereafter be kept in the full view of the House until the conclusion of the ballot",
    parent: 47,
  },
  {
    text_id: 189,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Clerk shall issue not more than one ballot paper to each Member who comes to the Table to obtain it and each Member who wishes to vote shall proceed to a booth or designated area provtext_ided by the Clerk for that purpose and located next to and within reasonable distance of the ballot box and shall, while there, mark the ballot paper by placing a mark in the space opposite the name of the candtext_idate for whom the Member wishes to vote, fold the marked ballot paper before leaving the booth or area and place the folded ballot paper in the ballot box.",
    parent: 47,
  },
  {
    text_id: 190,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "A Member who, before the conclusion of a ballot has marked a paper in error may, by returning it to the Clerk, obtain another in its place and the Clerk shall immediately cancel and destroy the paper so returned",
    parent: 1,
  },
  {
    text_id: 191,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "The Clerk shall make such arrangements as may be necessary to enable any Member with disability to vote.",
    parent: 47,
  },
  {
    text_id: 192,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "When it appears to the Clerk that all Members who are present and who wish to vote have placed their ballot papers in the ballot box, the Clerk shall unlock the box, examine the ballot papers, and having rejected those unmarked or spoilt, report the result of the ballot; and no Member who has not already recorded his or her vote shall be entitled to do so after the Clerk has unlocked the ballot box.",
    parent: 47,
  },
  {
    text_id: 193,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "A ballot paper is spoilt, if in the Clerk’s opinion, it does not text_identify the candtext_idate purported to be selected by the Member voting",
    parent: 47,
  },
  {
    text_id: 194,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "A person shall not be elected as Speaker, unless supported in a ballot by the votes of two-thirds of all Members.",
    parent: 48,
  },
  {
    text_id: 195,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If no candidate is supported by the votes of two-thirds of all Members, the candtext_idate or candtext_idates who received the highest number of votes in the ballot referred to in Paragraph (1) and the candtext_idate or candtext_idates who in that ballot received the next highest number of votes shall alone stand for election in a further ballot and the candtext_idate who receives the highest number of votes in the further ballot shall be elected Speaker",
    parent: 48,
  },
  {
    text_id: 196,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A candidate may, by written notice to the Clerk, withdraw his or her name before a ballot is started, and in the event of such withdrawal, the Clerk shall cross-out the name of that candtext_idate off any ballot papers issued for that or any subsequent ballot.",
    parent: 49,
  },
  {
    text_id: 197,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "If, in the further ballot referred to in Standing Orders 7 (Election threshold), more than one candteidate receives the highest number of votes, the ballot shall again be taken, and if there is an equality of the highest number of votes, a further ballot shall be taken until one candtext_idate obtains more votes than the other or others.",
    parent: 50,
  },
  {
    text_id: 198,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Immediately the results are declared, all the ballot papers used in the election of a Speaker shall be packed and sealed in the presence of the House and kept in the custody of the Clerk for a period of six months and shall thereafter be destroyed.",
    parent: 51,
  },
  {
    text_id: 199,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Despite the provisions of this Part, if there is only one candtext_idate who has been duly nominated for election as Speaker at the expiry of the nomination period, that candtext_idate shall be declared forthwith to have been elected Speaker without any ballot or vote being required",
    parent: 52,
  },
  {
    text_id: 200,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "Immediately following the election of the Speaker, the Clerk shall administer the Oath or Affirmation of Office to the Speaker in the presence of the assembled House.",
    parent: 53,
  },
  {
    text_id: 201,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Speaker or Deputy Speaker who intends to resign from office shall submit a letter of resignation addressed to the House.",
    parent: 54,
  },
  {
    text_id: 202,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Upon receipt of a letter of resignation, the Clerk shall, without delay—(a) in the case of resignation by the Speaker, inform the Deputy Speaker; or (b) in the case of resignation by the Deputy Speaker, inform the Speaker",
    parent: 54,
  },
  {
    text_id: 203,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The House shall be notified of a resignation under this Standing Orders within seven days",
    parent: 54,
  },
  {
    text_id: 204,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A member of the National Assembly, supported by at least one-third of all the members, may move a motion for the removal of the Speaker or Deputy Speaker for—(a) serious violation of a provision of the Constitution or of any other law including a violation of Chapter Six; (b) gross misconduct, whether in the performance of the Speaker’s or Deputy Speaker’s functions or otherwise; (c) physical or mental incapacity to perform the functions of office; (d) incompetence; or (e) bankruptcy.",
    parent: 55,
  },
  {
    text_id: 205,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Before giving Notice of the Motion under Paragraph (1), the Member shall deliver to the Clerk a copy of the proposed Motion in writing—(a) stating the grounds and particulars upon which the proposed Motion is made; (b) signed by the Member; (c) signed in support by at least one-third of all the Members of the Assembly.",
    parent: 55,
  },
  {
    text_id: 206,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Upon receipt of the motion by the Clerk, a Member shall not withdraw a signature appended to it.",
    parent: 55,
  },
  {
    text_id: 207,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Member shall give three days’ notice of the motion under Paragraph (1) within three days of the approval of the motion",
    parent: 55,
  },
  {
    text_id: 208,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Clerk shall set out on the Order Paper on which the Motion is listed—(a) the grounds and particulars upon which the proposed Motion is made; (b) the name of the Member sponsoring the Motion; and (c) the names of the Members in support of the Motion.",
    parent: 55,
  },
  {
    text_id: 209,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If the Motion is passed—(a) the Assembly shall appoint a select committee comprising eleven of its Members to investigate the matter; and (b) the committee shall, within seven days, investigate and report to the Assembly whether it finds the allegations against the Speaker or Deputy Speaker to be substantiated",
    parent: 55,
  },
  {
    text_id: 300,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker or Deputy Speaker has the right to appear and be represented before the select committee during its investigations",
    parent: 55,
  },
  {
    text_id: 301,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If the select committee reports that it finds the allegations—(a) unsubstantiated, no further proceedings shall be taken; or (b) substantiated, the National Assembly shall—(i) furnish the Speaker or Deputy Speaker with the report of the select Committee, together with any other evtext_idence adduced and such notes or papers presented to the committee at least three days before the day scheduled for his or her appearance before the Assembly; (ii) afford the Speaker or Deputy Speaker an opportunity to be heard; (iii) constext_ider the Report of the select committee; and (iv) vote whether to approve the resolution requiring the removal from office of the Speaker or Deputy Speaker",
    parent: 1,
  },
  {
    text_id: 302,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If a resolution requiring the removal from office of a Speaker or Deputy Speaker is supported by at least two-thirds of the Members of the Assembly, the Speaker or Deputy Speaker shall cease to hold office.",
    parent: 55,
  },
  {
    text_id: 303,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "As soon as practicable after the election of a Speaker following a General Election, a Deputy Speaker shall be elected.",
    parent: 56,
  },
  {
    text_id: 304,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If the office of Deputy Speaker falls vacant at any time before the end of the term of Parliament, the House shall, as soon as practicable, elect a Member to that office",
    parent: 56,
  },
  {
    text_id: 305,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The procedure for electing a Deputy Speaker shall, with necessary modifications, be the same as that prescribed for the election of the Speaker.",
    parent: 56,
  },
  {
    text_id: 306,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "After taking and subscribing to the Oath or Affirmation of Office under Standing Orders 12 (Swearing-in of the Speaker), the Speaker shall notify the Members of the place, date and time of the opening of Parliament, which shall be not more than thirty days after the first sitting of the House",
    parent: 57,
  },
  {
    text_id: 307,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Following the notification by the Speaker under Paragraph (1), the sitting of the House shall stand adjourned until the date and time of the opening of Parliament",
    parent: 57,
  },
  {
    text_id: 308,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Deputy Speaker shall be the Chairperson of Committees and shall prestext_ide over all Committees of the whole House.",
    parent: 58,
  },
  {
    text_id: 309,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If the Deputy Speaker is absent, or if the Deputy Speaker constext_iders that it is desirable that he or she should take part in any proceedings in Committee otherwise than as the person prestext_iding, the Speaker shall take the Chair.",
    parent: 58,
  },
  {
    text_id: 310,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "There shall be a panel to be known as the Chairperson’s Panel which shall comprise four Members to be known, respectively, as the First, Second, Third and Fourth Chairperson of Committees and who shall be entitled to exercise all the powers vested in the Chairperson of Committees",
    parent: 59,
  },
  {
    text_id: 311,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "As soon as practicable, after the election of the Deputy Speaker following a general election, the Speaker shall, in consultation with leaders of parliamentary parties, submit a list of four Members for constext_ideration by the House Business Committee.",
    parent: 59,
  },
  {
    text_id: 312,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The House Business Committee shall, within seven days of receipt of the names of the nominees, table the list in the House and give notice of motion for approval.",
    parent: 59,
  },
  {
    text_id: 313,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "Whenever a Motion for approval under Paragraph (3) is moved in the House, no objection against the proposed membership on the Chairperson’s Panel of any particular Member shall be permitted and objections, if any, shall be formulated and constext_idered against the proposed membership as a whole.",
    parent: 59,
  },
  {
    text_id: 314,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "In nominating the Members of the Chairperson’s Panel, the Speaker and the House Business Committee shall have regard to the relative party majorities in the House and shall ensure, so far as shall be practicable, that at least one member of the Panel is from either gender.",
    parent: 59,
  },
  {
    text_id: 315,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker may, in writing, to the House Business Committee give notice that a member has been discharged from the Panel",
    parent: 60,
  },
  {
    text_id: 316,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Within seven days of receipt by the House Business Committee of a notice under Paragraph (1), the House Business Committee shall constext_ider the notice and give Notice of Motion to replace the Member.",
    parent: 60,
  },
  {
    text_id: 317,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "The Speaker shall prestext_ide at any sitting of the House but in absence of the Speaker, the Deputy Speaker shall prestext_ide and in absence of the Speaker and the Deputy Speaker, a member elected by the House for that purpose pursuant to Article 107 of the Constitution shall preside.",
    parent: 61,
  },
  {
    text_id: 318,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The approval of the First, Second, Third and Fourth Chairperson of Committees under Standing Orderss 16 (Chairperson’s Panel) shall be deemed to constitute an election for purposes of Paragraph (1) and either the First, Second, Third or Fourth Chairperson of Committees may prestext_ide over the House in the absence of the Speaker and the Deputy Speaker.",
    parent: 61,
  },
  {
    text_id: 319,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The largest party or coalition of parties in the National Assembly shall elect (a) a member of the National Assembly belonging to the party or coalition of parties to be the Leader of the Majority Party; (b) a member of the National Assembly belonging to the party or coalition of parties to be the Deputy Leader of the Majority Party",
    parent: 62,
  },
  {
    text_id: 320,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "In electing members under Paragraph (2), the largest party or coalition of parties in the National Assembly shall take into account—(a) any existing coalition agreement entered into pursuant to the Political Parties Act; (b) the need for gender balance.",
    parent: 62,
  },
  {
    text_id: 321,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A member elected under Paragraph (2) may be removed by a majority of votes of all members of the largest party or coalition of parties in the National Assembly",
    parent: 62,
  },
  {
    text_id: 322,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The whip of the largest party or coalition of parties in the National Assembly shall forthwith, upon a decision being made under this Standing Orders, communicate to the Speaker, in writing the decision together with the minutes of the meeting at which the decision was made",
    parent: 62,
  },
  {
    text_id: 323,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Minority party or coalition of parties in the National Assembly shall elect—(a) a member of the National Assembly belonging to the party or coalition of parties to be the Leader of the Minority Party; (b) a member of the National Assembly belonging to the party or coalition of parties to be the Deputy Leader of the Minority Party.",
    parent: 63,
  },
  {
    text_id: 324,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "In electing members under Paragraph (1), the minority party or coalition of parties in the National Assembly shall take into account—(a) any existing coalition agreement entered into pursuant to the Political Parties Act; (b) the need for gender balance.",
    parent: 63,
  },
  {
    text_id: 325,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A member elected under Paragraph (2) may be removed by a majority of votes of all members of the minority party or coalition of parties in the National Assembly.",
    parent: 63,
  },
  {
    text_id: 326,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The whip of the minority party or coalition of parties in the National Assembly shall forthwith upon a decision being made under this Standing Orders, communicate to the Speaker, in writing the decision together with the minutes of the meeting at which the decision was made.",
    parent: 63,
  },
  {
    text_id: 327,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Prestext_ident shall address the opening of each newly elected Parliament",
    parent: 64,
  },
  {
    text_id: 328,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "At the conclusion of the Prestext_ident’s address, the sitting shall stand suspended or adjourned as the Speaker may direct until such time or to such day as may be specified by the Speaker",
    parent: 64,
  },
  {
    text_id: 329,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Prestext_ident shall address a special sitting of Parliament once every year and may address Parliament at any other time.",
    parent: 65,
  },
  {
    text_id: 330,
    "  date": "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker shall notify the Members of the place, date and time of a sitting under Paragraph (1)",
    parent: 65,
  },
  {
    text_id: 331,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Whenever the Speaker has been informed that the Prestext_ident will address a special sitting of Parliament on a specified day and time, then on that day, no Motion for the adjournment of the House shall be made before the time for which the Prestext_ident’s arrival has been notified.",
    parent: 65,
  },
  {
    text_id: 332,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Members shall be called to order and stand in silence whenever the Prestext_ident enters or leaves the Chamber.",
    parent: 66,
  },
  {
    text_id: 333,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Whenever the President addresses Parliament, the Speaker of the National Assembly shall take the seat on the right of the President and the Speaker of the Senate shall take the seat on the left of the President",
    parent: 67,
  },
  {
    text_id: 324,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "At any sitting held under this Standing Orders, the Speaker of the National Assembly shall prestext_ide and shall be assisted by the Speaker of the Senate.",
    parent: 67,
  },
  {
    text_id: 325,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "When delivering an address to the House, the Prestext_ident shall be heard in silence and the address shall not be followed by any comment or question.",
    " parent": 67,
  },
  {
    text_id: 326,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Whenever the President delivers an Address, a Member may as soon as practicable thereafter, lay the Address on the Table of the House following the reading of such Address",
    parent: 67,
  },
  {
    text_id: 327,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",

    heirarchy: "Paragraph",
    content:
      "A Member may give a notice of Motion that “The Thanks of the House be recorded for the exposition of public policy contained in the Address of the Prestext_ident delivered on….;” but debate on the Motion shall not exceed four sitting days.",
    parent: 67,
  },
  {
    text_id: 328,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker may, in consultation with the Leader of the Majority Party and the Leader of the Minority Party, allow a visiting Head of State or other such visiting dignitary, to address the Assembly, and may, in consultation with the Speaker of the Senate arrange for a joint sitting of Parliament for purposes of an address by such visiting Head of State or such other visiting dignitary.",
    parent: 68,
  },
  {
    text_id: 329,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Standing Orders 23 (Prestext_ident entering or leaving Chamber) and Paragraphs (1), (3) and (4) of Standing Orders 24 (Prestext_ident’s address to Parliament) shall, with necessary modifications, apply to visiting Heads of State and such other dignitaries.",
    parent: 68,
  },
  {
    text_id: 330,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker may designate a suitable place in the Chamber or at the bar of the House for— (a) the Cabinet Secretary responsible for finance to make a public pronouncement of the budget policy highlights and revenue raising measures for the national government as contemplated under the Public Finance Management Act;",
    parent: 69,
  },
  {
    text_id: 331,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "other persons to make submissions or presentations before the House.",
    parent: 69,
  },
  {
    text_id: 332,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Whenever a new House is elected, the Prestext_ident, by notice in the Gazette, shall appoint the place and date for the first sitting of the new House, which shall be not more than thirty days after the election.",
    parent: 70,
  },
  {
    text_id: 333,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Except for the Session commencing immediately after a general election, the regular Sessions of the House shall commence on the second Tuesday of February and terminate on the first Thursday of December.",
    parent: 71,
  },
  {
    text_id: 334,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Despite Paragraph (1), the House may, by resolution, alter the dates specified under Paragraph (1) in respect of a particular Session.",
    parent: 71,
  },
  {
    text_id: 335,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Subject to Paragraph (1), the House shall continue to be in session and may adjourn for such number of days as it may determine in its calendar",
    parent: 71,
  },
  {
    text_id: 336,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Despite Paragraphs (1), (2) and (3), a period of three months shall not intervene between the last sitting of the Assembly in one Session and the first sitting thereof in the next Session.",
    parent: 71,
  },
  {
    text_id: 337,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The House Business Committee shall, with approval of the House, determine the Calendar of the House.",
    parent: 72,
  },
  {
    text_id: 338,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Calendar of the House once approved shall be published in the gazette, Parliamentary Website and at least two newspapers of national circulation.",
    parent: 72,
  },
  {
    text_id: 339,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "On a day when the Assembly is scheduled to adjourn to a day other than the next normal sitting day in accordance with the parliamentary Calendar, the Speaker shall notify Members of the same, and at the appointed time, the Assembly shall adjourn without question put.",
    parent: 72,
  },
  {
    text_id: 340,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Despite Paragraph (2) the Assembly may, by resolution, alter its Calendar or the adjournment date",
    parent: 72,
  },
  {
    text_id: 341,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Whenever during a Session the House stands adjourned, whether or not a day has been appointed for the next meeting, the Speaker may, on the request of the Leader of the Majority Party or the Leader of the Minority Party, appoint a day for a special sitting of the House",
    parent: 73,
  },
  {
    text_id: 342,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker may allow a request under Paragraph (1) if the Speaker is satisfied that the business proposed to be transacted relates to the matters specified under Standing Orders 61 (Definition of Special Motion) or other urgent and exceptional business as the Speaker may allow.",
    parent: 73,
  },
  {
    text_id: 343,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker shall, by notice in the Gazette, notify the Members of the place, date and time appointed for the special sitting of the House.",
    parent: 73,
  },
  {
    text_id: 344,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Despite Paragraph (1), where the proposed business to be transacted by the House requires the action of the Senate, the Speaker of the National Assembly shall, in writing, notify the Speaker of the Senate of the date appointed for the special sitting.",
    parent: 73,
  },
  {
    text_id: 345,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Whenever the House meets for a special sitting under Paragraph (1), the Speaker shall specify the business to be transacted on the day or days appointed and the business so specified shall be the only business before the House during the special sitting, following which the House shall stand adjourned until the day appointed in the parliamentary calendar.",
    parent: 73,
  },
  {
    text_id: 346,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Unless the Speaker, for the convenience of the House otherwise directs, the House shall meet at 9.30 a.m. on Wednesday and at 2.30 p.m. on Tuesday, Wednesday, and Thursday, but more than one sitting may be directed during the same day",
    parent: 74,
  },
  {
    text_id: 347,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Unless for the convenience of the House the Speaker or the Chairperson (as the case may be) directs earlier or later interruption of business, at 7.00 p.m. or (if it is an Allotted Day) at 7.30 p.m., on the occasion of an afternoon sitting and at 1.00 p.m. on the occasion of a morning sitting, the Speaker or the Chairperson of Committees shall interrupt the business then under constext_ideration and if the House is in Committee the Chairperson shall leave the Chair and report progress and ask leave to sit again.",
    parent: 74,
  },
  {
    text_id: 348,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Notwithstanding Paragraphs (1) and (2), the House may resolve— (a) to extend its sitting time; or (b) to meet at any other time on a sitting day; or (c) to meet on any other day, in order to transact business.",
    parent: 74,
  },
  {
    text_id: 349,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Motion under Paragraph (3)(a) shall be moved at least thirty minutes before the time appointed for adjournment.",
    parent: 74,
  },
  {
    text_id: 350,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If at the time appointed for the interruption of business, a division is in progress, or a question is being put from the Chair and a division results immediately thereon, such interruption shall be deferred until after the declaration of the numbers and the result of the division.",
    parent: 74,
  },
  {
    text_id: 351,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Upon the conclusion of all proceedings under Paragraphs (2), (3) or (4) of this Standing Orders, or upon the earlier completion or deferment of all business standing upon the Order Paper for the sitting, the Speaker shall adjourn the House without question put",
    parent: 74,
  },
  {
    text_id: 352,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Member may at any time, for reasons stated, seek leave to move “That, this House do now adjourn.”",
    parent: 75,
  },
  {
    text_id: 353,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If the Speaker is of the opinion that such Motion for adjournment of the House is frivolous, vexatious, or an abuse of the proceedings of the House, the Speaker may forthwith put the question thereon or decline to propose it.",
    parent: 75,
  },
  {
    text_id: 354,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The debate on a Motion under this Standing Orders shall be confined to the matter of the Motion.",
    parent: 75,
  },
  {
    text_id: 355,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Any Member may at any time rise in his or her place and seek leave to move the adjournment of the House for the purpose of discussing a definite matter of urgent national importance.",
    parent: 76,
  },
  {
    text_id: 356,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Member who wishes to seek leave to move the adjournment of the House shall, at least two hours before the commencement of the sitting, hand to the Speaker a written notification of the matter but the Speaker shall refuse to allow the claim, unless the Speaker is satisfied that the matter is definite, urgent and of national importance and may properly be raised on a Motion for adjournment of the House",
    parent: 76,
  },
  {
    text_id: 357,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If the Speaker is satisfied in terms of Paragraph (2) and not less than twenty other Members rise in their places in support, the Speaker shall nominate a time on the same day at which such Motion may be moved.",
    parent: 76,
  },
  {
    text_id: 358,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "No Member speaking on a matter under this Standing Orders shall speak for more than five minutes without the leave of the House, except that the Mover may speak for ten minutes.",
    parent: 76,
  },
  {
    text_id: 359,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A quorum of the House or of a Committee of the whole House shall be fifty Members",
    parent: 77,
  },
  {
    text_id: 360,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If there is not a quorum present when the Chair is taken, at the time appointed for a meeting of the House, immediately after the saying of the prayer, the Speaker shall order the bell to be rung for ten minutes, and if no quorum is present at the expiration of the ten minutes, the Speaker may direct that the bell be rung for a further five minutes and if there is still no quorum present, the Speaker shall adjourn the House forthwith to the next sitting.",
    parent: 77,
  },
  {
    text_id: 361,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If at any time after the Chair is taken, or when the House is in Committee, a Member objects that there is not a quorum present, the Speaker or the Chairperson shall count the Members in the House or the Committee as the case may be.",
    parent: 78,
  },
  {
    text_id: 362,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If on the count under Paragraph (1) a quorum does not appear to be present, the Speaker or the Chairperson shall cause the division bell to be rung as on a division, and if no quorum is present at the expiration of the ten minutes— (a) if the Speaker is in the Chair, the Speaker shall adjourn the House until the next sitting without question put; (b) if the House is in Committee, the Chairperson shall leave the Chair and report the fact to the Speaker, who shall adjourn the House until the next sitting without question put.",
    parent: 78,
  },
  {
    text_id: 363,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Whenever the Speaker or the Chairperson, as the case may be, is engaged in counting the House or the Committee respectively, the doors shall remain unlocked but no Member shall be allowed to leave the Chamber, except a party whip who may be permitted to leave the Chamber to seek the Members required to raise a quorum",
    parent: 78,
  },
  {
    text_id: 364,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If, from the number of Members taking part in an electronic voting or roll call division, it appears that the Members do not themselves constitute a quorum, the vote or division shall be invaltext_id and the business then under constext_ideration shall stand over until the next sitting and the Speaker shall proceed as if his or her attention had been drawn to the absence of a quorum, but if after so proceeding a quorum is then present, the next business shall be entered upon",
    parent: 79,
  },
  {
    text_id: 365,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "When the Quorum bell is ringing, Members shall maintain order in the House",
    parent: 80,
  },
  {
    text_id: 366,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Order Paper shall be prepared by the Clerk, showing the business proposed to be transacted to be placed before or taken by the House and the order in which it is to be taken, including a notice paper showing the business for each sitting day of the week, together with such other information as the Speaker may from time, to time direct.",
    parent: 81,
  },
  {
    text_id: 367,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Order Paper shall be published on the parliamentary website and shall be made available to Members, at least twelve hours before the House meets, but a supplementary Order Paper shall be made available at least one hour before the House meets.",
    parent: 81,
  },
  {
    text_id: 368,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Clerk shall prepare and publish on the parliamentary website, weekly programmes showing the business of the House and the schedule of sittings of the various committees, and shall circulate such programmes to Members, State Departments, and the media not later than the Frtext_iday of the week preceding such business",
    parent: 82,
  },
  {
    text_id: 369,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Each day after Prayers have been satext_id and the House has been called to order, the Business of the House shall be proceeded with in the following sequence— (i) Administration of Oath; (ii) Communication from the Chair; (iii) Messages; (iv) Petitions; (v) Papers; (vi) Notices of Motion; (vii) Questions and Statements; (viii) Motions and Bills.",
    parent: 83,
  },
  {
    text_id: 370,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Business shall be disposed of in the sequence in which it appears in the Order Paper or in such other sequence as the Speaker may, for the convenience of the House, direct.",
    parent: 83,
  },
  {
    text_id: 371,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "On Wednesday morning a Bill or a motion not sponsored by the Majority or Minority Party or by a Committee shall have precedence over all other business in such order as the House Business Committee shall ballot.",
    parent: 83,
  },
  {
    text_id: 372,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker shall direct the Clerk to read the Orders of the Day without question put.",
    parent: 83,
  },
  {
    text_id: 373,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A message from the Assembly to the Senate shall be in writing and shall be signed by the Speaker.",
    parent: 84,
  },
  {
    text_id: 374,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Clerk of the Assembly shall transmit a message from the House to the Clerk of the Senate and shall receive messages from the Senate.",
    parent: 84,
  },
  {
    text_id: 375,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Clerk shall deliver to the Speaker a message received from the Senate under Paragraph (2) at the first available opportunity after receipt and in any event not later than the next day not being a Saturday, Sunday or public holtext_iday.",
    parent: 84,
  },
  {
    text_id: 376,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If a message is received from the Senate, at a time when the House is in session, the Speaker shall report the message to the House at the first convenient opportunity after its receipt and in any event not later than the next sitting day.",
    parent: 84,
  },
  {
    text_id: 377,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If a message is received from the Senate, at a time when the House is not in session, the Speaker shall forthwith cause the message to be transmitted to every Member and shall report the message to the House on the day the House next sits.",
    parent: 84,
  },
  {
    text_id: 378,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "When the Speaker reports a message from the Senate under Paragraph (4) or (5), the message shall be deemed to have been latext_id before the House and the Speaker may either—\n(a) direct that the message be dealt with forthwith; or\n(b) appoint a day for the constext_ideration of the message; or\n(c) refer the message to the relevant Committee of the House for constext_ideration.",
    parent: 84,
  },
  {
    text_id: 379,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker shall read to the House any message from the Prestext_ident delivered to the Speaker for communication to the House.",
    parent: 85,
  },
  {
    text_id: 380,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If a message is received from the President, at a time when the House is not in session, the Speaker shall forthwith cause the message to be transmitted to every Member and shall report the message to the House on the day the House next sits.",
    parent: 85,
  },
  {
    text_id: 381,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "When a message from the President is read, the message shall be deemed to have been latext_id before the House and the Speaker may either—\n(a) direct that the message be dealt with forthwith; or\n(b) appoint a day for the constext_ideration of the message; or\n(c) refer the message to the relevant Committee of the House for constext_ideration.",
    parent: 85,
  },
  {
    text_id: 382,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Paragraphs (1), (2) and (3) shall apply, with necessary modifications, to a message delivered to the Speaker by a Cabinet Secretary for communication to the House pursuant to any written law provtext_iding for conveyance of messages from the Cabinet.",
    parent: 85,
  },
  {
    text_id: 383,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Pursuant to Standing Orders 216(5)(j), a Member proposing to ask a Question in the House shall give notice to the Clerk.",
    parent: 86,
  },
  {
    text_id: 384,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Member shall deliver a signed copy of the proposed Question to the Clerk for submission to the Speaker for approval.",
    parent: 8,
  },
  {
    text_id: 385,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Where the Speaker approves a Question and determines the Cabinet Secretary responsible for the matters to which it relates, the Clerk shall, at an appropriate time, publish the Question in the Order paper.",
    parent: 8,
  },
  {
    text_id: 386,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "In scheduling a Question in the Order Paper, the Clerk shall constext_ider the urgency of the Question as determined by the Speaker.",
    parent: 86,
  },
  {
    text_id: 387,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Member shall ask his or her Question on the day it is scheduled in the Order Paper and the Leader of the Majority Party shall, at an appointed date, inform the House of the date and time when a Cabinet Secretary shall be required to appear before a Committee to reply to a Question, subject to Paragraph (6).",
    parent: 86,
  },
  {
    text_id: 388,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "In determining the date and time when a Cabinet Secretary shall be required to appear before a Committee to reply to a Question, the Leader of the Majority Party shall—\n(a) constext_ider the urgency of the Question as determined by the Speaker; and\n(b) consult with the Chairperson of the Committee.",
    parent: 86,
  },
  {
    text_id: 389,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "These rules apply to Questions raised in the House and Questions referred to Committees for reply.",
    parent: 87,
  },
  {
    text_id: 390,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Except as the Speaker may otherwise allow, a Member may not ask a Question which—\n(a) is in effect a speech;\n(b) is lengthy;\n(c) is limited to give information;\n(d) is framed so as to suggest its own reply or to convey a particular point of view;\n(e) includes extracts from newspapers or quotations from speeches;\n(f) contains any argument, inference, opinion, imputation or ironical or offensive expression or epithet;\n(g) seeks an expression of opinion;\n(h) repeats in substance a matter already addressed by a Committee of the House or in the course of debate in the House during the same Session;\n(i) refers to more than one subject;\n(j) includes the name of a person or a statement not strictly necessary to render the Question intelligible;\n(k) contains an allegation which the Member is not prepared to substantiate;\n(l) implies an allegation of a personal nature or which reflects upon the conduct of a person whose conduct can only be challenged through substantive Motion or upon the conduct of any other person otherwise than in that person’s official or public capacity;\n(m) relates to a matter which is sub judice or which by any written law is secret pursuant to Standing Orders 89 (Matters sub judice or secret);\n(n) falls within the functions and powers of county governments as contemplated under Part II of the Fourth Schedule to the Constitution;\n(o) seeks a reply that is readily available in ordinary works of reference or official publications;\n(p) refers discourteously to a friendly country, a Head of State or Government or the representative in Kenya of a friendly country; or\n(q) refers to a matter under constext_ideration by the House or a Committee.",
    parent: 87,
  },
  {
    text_id: 391,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Member shall take responsibility for accuracy of the facts upon which a Question is based.",
    parent: 87,
  },
  {
    text_id: 392,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Member may, with leave of the Speaker, ask a supplementary question to a Question raised in the House before it is referred to a Committee for reply.",
    parent: 87,
  },
  {
    text_id: 393,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Where the Member scheduled to raise a Question in the House is absent without the Speaker’s permission, the Question shall be dropped and no further proceedings shall be allowed on the Question during the same session.",
    parent: 87,
  },
  {
    text_id: 394,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Speaker may defer a Question to a different time or day from its scheduled time and day.",
    parent: 87,
  },
  {
    text_id: 395,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Cabinet Secretary shall provtext_ide physical and electronic copies of the reply to a Question at least a day before appearing before a Committee.",
    parent: 87,
  },
  {
    text_id: 396,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Subject to Standing Orders 42A (Notice of Question), a Committee shall dispose of a Question in the sequence it appears in its Schedule of Questions or as its Chairperson may direct.",
    parent: 87,
  },
  {
    text_id: 397,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Chairperson may allow a Member to ask a supplementary question which relates to a Question referred to a Committee.",
    parent: 87,
  },
  {
    text_id: 398,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Where a Chairperson allows Members to ask supplementary questions, the Chairperson shall give first priority to the Member who asked the Question referred to a Committee for reply.",
    parent: 87,
  },
  {
    text_id: 399,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Where the Member who raised a Question referred to the Committee is absent without the Chairperson’s permission, the Question shall be dropped and no further proceedings shall be allowed on the Question during the same session.",
    parent: 87,
  },
  {
    text_id: 400,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Chairperson of a Committee may—\n(a) defer a Question to a different time or day from its scheduled time and day; or\n(b) direct a Cabinet Secretary to provtext_ide additional information or a further reply to a Question or supplementary questions raised in the Committee.",
    parent: 87,
  },
  {
    text_id: 401,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Where a Member prefers a written reply to his or her Question—\n(a) the Speaker shall direct that a written reply be provtext_ided in respect of the Question; and\n(b) the Clerk shall forward the Question to the relevant Cabinet Secretary and, upon receipt, provtext_ide the written reply to the Member.",
    parent: 87,
  },
  {
    text_id: 402,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Subject to Paragraph (2), a Cabinet Secretary shall reply to a Question within thirty days of referral of a Question to a Committee.",
    parent: 88,
  },
  {
    text_id: 403,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Where the Speaker determines a Question to be urgent, a Cabinet Secretary shall reply to the Question within three days of referral of the Question to a Committee.",
    parent: 88,
  },
  {
    text_id: 404,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Chairperson of a Committee shall submit a progress report to the House on Questions—\n(a) referred to the Committee;\n(b) replied to;\n(c) which the Committee has directed a Cabinet Secretary to provtext_ide additional information or further reply; and\n(d) pending before the Committee.",
    parent: 89,
  },
  {
    text_id: 405,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Notwithstanding Standing Orders 30 (Hours of Meeting), the Speaker shall interrupt the business of the House every Tuesday at 6.30 pm to facilitate Members to make general statements of topical concern.",
    parent: 89,
  },
  {
    text_id: 406,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Member who wishes to seek leave to raise a matter under this Standing Orders shall, before 3.00 pm on the day the statement is to be made, hand to the Speaker a written notification of the matter, but the Speaker shall refuse to allow the request unless satisfied that the matter may properly be discussed in the House.",
    parent: 89,
  },
  {
    text_id: 407,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "No Member making a statement under this Standing Orders shall speak for more than three minutes, unless with permission of the Speaker.",
    parent: 89,
  },
  {
    text_id: 408,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Notwithstanding Standing Orders 40 (Sequence of Proceedings), there shall be time to be designated Statements Hour, every Thursday, commencing not later than 3.00 pm.",
    parent: 90,
  },
  {
    text_id: 409,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "During the Statements Hour—\n(a) a Member of the House Business Committee designated by the Committee for that purpose shall, every Thursday or on the last sitting day, for not more than ten minutes, present and lay on the Table, a statement informing the House of the business coming before the House in the following week;\n(b) the Leader of the Majority Party, or the Leader of the Minority Party as the case may be, or their designees may make a statement relating to their responsibilities in the House or the activities of a Committee;\n(c) A Member may request for a statement from the Committee chairperson relating to matters under the mandate of the Committee and the Speaker may either appoint a day for the statement or direct that the statement be issued on the same day.",
    parent: 90,
  },
  {
    text_id: 410,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Upon receipt of a notification of nomination for appointment to a State Office or such other office as is under the Constitution or under any other legislation required to be approved by the House, the nomination shall stand committed to the relevant Departmental Committee of the House for consideration.",
    parent: 91,
  },
  {
    text_id: 411,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Despite Paragraph (1), appointments under Article 152(2) of the Constitution shall stand committed to the Committee on Appointments.",
    parent: 91,
  },
  {
    text_id: 412,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Before holding an approval hearing, a Committee to which proposed appointments have been referred shall notify the candtext_idate and the public of the time and place for the holding of the approval hearing at least seven days prior to the hearing",
    parent: 91,
  },
  {
    text_id: 413,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "The Committee shall conduct a hearing on the proposed appointment and shall, unless otherwise provtext_ided in law, table its report in the House within fourteen days of the date on which the notification was received under Paragraph (1)",
    parent: 91,
  },
  {
    text_id: 414,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content: "This Part shall apply to all Motions, including special Motions.",
    parent: 92,
  },
  {
    text_id: 415,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Except as otherwise provtext_ided by these Standing Orderss, notice shall be given by a Member of any Motion which the Member proposes to move.",
    parent: 93,
  },
  {
    text_id: 416,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Before giving notice of Motion, the Member shall deliver to the Clerk a copy of the proposed Motion in writing and signed by the Member, and the Clerk shall submit the proposed Motion to the Speaker.",
    parent: 93,
  },
  {
    text_id: 417,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "If the Speaker is of the opinion that any proposed Motion –\n(a) is one which infringes, or the debate on which is likely to infringe, any of these Standing Orderss;\n(b) is contrary to the Constitution or an Act of Parliament, without expressly proposing appropriate amendment to the Constitution or the Act of Parliament;\n(c) is too long;\n(d) is framed in terms which are inconsistent with the dignity of the House;\n(e) contains or implies allegations which the Speaker is not satisfied that the Mover can substantiate; or\n(f) calls for the commitment of public funds for which no provision is made in the Annual Estimates as adopted by the National Assembly,\nthe Speaker may direct either that, the Motion is inadmissible, or that notice of it cannot be given without such alteration as the Speaker may approve or that the motion be referred to the relevant committee of the Assembly, pursuant to Article 114(2) of the Constitution.",
    parent: 93,
  },
  {
    text_id: 418,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A Member giving notice of a Motion approved by the Speaker shall state its terms to the House and whether the original copy received by the Clerk has been certified by a party leader or party whip for sponsorship by the Member’s party.",
    parent: 93,
  },
  {
    text_id: 419,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "A notice of Motion under Part XIV (Procedure for removal from State Office) shall be given in the House within three sitting days following approval by the Speaker, and, if not, such motion shall be deemed to have been withdrawn and shall not be moved again in the same terms in the same session, except with the leave of the Speaker.",
    parent: 93,
  },
  {
    text_id: 420,
    date: "2023-10-23T07:20:13.111650Z",
    document: "Standing Orders",
    heirarchy: "Paragraph",
    content:
      "Unless the House resolves otherwise—\n(a) a Motion sponsored by a party shall have precedence over all other Motions on such day as the House Business Committee, in consultation with the Speaker, may determine, but where a party has sponsored two or more motions, the Motion shall be constext_ideered in such order as sponsoring party may determine;\n(b) notice of an approved Motion other than those under sub-Paragraph (a) may be given to Members by means of a list to be published in such manner as the Speaker may from time to time direct and the Member giving such notice shall state its terms to the House when the Motion has acquired precedence in accordance with Standing Orders 50 (Time for moving Motions), but at least one day before the Motion appears on the Order Paper.",
    parent: 93,
  },
];

// neww

// Reassigning text_id values based on hierarchy relationships
function reassignTextIDs(data) {
  const hierarchyMap = {};

  // Group data by hierarchy type
  data.forEach((obj) => {
    if (!hierarchyMap[obj.heirarchy]) {
      hierarchyMap[obj.heirarchy] = [];
    }
    hierarchyMap[obj.heirarchy].push(obj);
  });

  // Rearrange text_id based on the hierarchy relationships
  let newTextId = 1;
  const processHierarchy = (hierarchyType) => {
    if (hierarchyMap[hierarchyType]) {
      hierarchyMap[hierarchyType].forEach((obj) => {
        obj.text_id = newTextId++;
      });
    }
  };

  // Reassign the text_id based on the specified hierarchy relationships
  processHierarchy("Document");
  processHierarchy("Header");
  processHierarchy("Paragraph");
  processHierarchy("Part");

  return data;
}

// Call the function to reassign the text_id values
const StandingOrders = reassignTextIDs(data);

// Display the updated data with modified text_id values
console.log(StandingOrders);

export default StandingOrders;

// arrnge the object cronologically for that all child objects should never appear before the pareant .
