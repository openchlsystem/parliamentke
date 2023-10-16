const categories = [
  {
    id: 1,
    name: "Document Type",
    description: "Category related to document types",
    parent_id: null, // Top-level category
  },
  {
    id: 2,
    name: "Bills",
    description: "Category for bills and proposed legislation",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 3,
    name: "Committee Reports",
    description: "Category for committee reports",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 4,
    name: "Debates",
    description: "Category for parliamentary debates",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 5,
    name: "Minutes",
    description: "Category for parliamentary minutes",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 6,
    name: "Resolutions",
    description: "Category for parliamentary resolutions",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 7,
    name: "Amendments",
    description: "Category for proposed amendments to bills",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 8,
    name: "Legislative Documents",
    description: "Category for various legislative documents",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 9,
    name: "Standing Orders",
    description: "Category for parliamentary standing orders",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 10,
    name: "Committees",
    description: "Category for parliamentary committees",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 11,
    name: "Budget Approvals",
    description: "Category for budget approval documents",
    parent_id: 1, // Parent ID references "Document Type"
  },
  {
    id: 12,
    name: "Function",
    description: "Category related to parliamentary functions",
    parent_id: null, // Top-level category
  },
  {
    id: 13,
    name: "Legislation",
    description: "Category for legislative documents",
    parent_id: 12, // Parent ID references "Function"
  },
  {
    id: 14,
    name: "Committees",
    description: "Category for parliamentary committees",
    parent_id: 12, // Parent ID references "Function"
  },
  {
    id: 15,
    name: "Budgeting",
    description: "Category for budgeting-related documents",
    parent_id: 12, // Parent ID references "Function"
  },
  {
    id: 16,
    name: "Parliamentary Procedures",
    description: "Category for parliamentary procedures",
    parent_id: 12, // Parent ID references "Function"
  },
  // You can add more categories and subcategories as needed
];

export default categories;
