Full-Stack-Store-Management-System(SMS)
│   
├── backend(SMS Node.js)
│   ├── src/
│   │   ├── config/                       
│   │   │   ├── db.js
│   │   │   ├── env.js
│   │   │   └── index.js
│   │   ├── models/                          
│   │   │   ├── user.model.js
│   │   │   ├── product.model.js
│   │   │   ├── category.model.js
│   │   │   ├── Order.model.js
│   │   │   ├── Customer.model.js
│   │   │   ├── Supplier.model.js
│   │   │   └── InventoryLog.model.js
│   │   ├── controllers/                          
│   │   │   ├── auth.controller.js
│   │   │   ├── product.controller.js
│   │   │   ├── categorycontroller.js
│   │   │   ├── order.controller.js
│   │   │   ├── customer.controller.js
│   │   │   └── supplier.controller.js
│   │   ├── services/                          
│   │   │   ├── auth.service.js
│   │   │   ├── product.service.js
│   │   │   ├── inventory.service.js
│   │   │   ├── order.service.js
│   │   │   ├── customer.service.js
│   │   │   └── supplier.service.js
│   │   ├── routes/                          
│   │   │   ├── auth.routes.js
│   │   │   ├── product.routes.js
│   │   │   ├── category.routes.js
│   │   │   ├── order.routes.js
│   │   │   ├── customer.routes.js
│   │   │   ├── supplier.routes.js
│   │   │   └── index.js
│   │   ├── middlewares/                          
│   │   │   ├── auth.middleware.js
│   │   │   ├── role.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── validate.middleware.js
│   │   ├── validations/                          
│   │   │   ├── auth.validation.js
│   │   │   ├── product.validation.js
│   │   │   ├── order.validation.js
│   │   │   └── validate.validation.js
│   │   ├── utils/                          
│   │   │   ├── response.js
│   │   │   ├── logger.js
│   │   │   ├── hash.js
│   │   │   └── constants.js
│   │   ├── providers/                          
│   │   │   ├── email.provider.js
│   │   │   ├── sms.provider.js
│   │   │   └── payment.provider.js
│   │   ├── app.js                          
│   │   └── server.js 
│	├── tests/
│   │   ├── auth.test.js
│   │   ├── product.test.js
│   │   └── order.test.js
│	├── package.json
│	├── .env
│	├── .gitignore
│   └── README.md 
│   
├── Frontend(SMS with React.js)
│   │
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/  
│   │	│	├── images/     
│   │	│	├── icon/                                     
│   │	│   └── styles/
│   │   │       ├── variables.css
│   │   │       ├── global.css
│   │   │   	└── theme.css
│   │   ├── components/                                            
│   │	│   ├── common/
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.jsx
│   │   │   │	│   └── button.module.jsx
│   │   │   │   ├── Input/
│   │   │   │   │   ├── Input.jsx
│   │   │   │	│   └── Input.module.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │	└── Loader.jsx
│   │	│   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │	└── Breadcrumb.jsx
│   │	│   └── protected/
│   │   │       ├── ProtectedRoute.jsx
│   │   │   	└── RoleBaseRoute.jsx
│   │	│ 
│   │   ├── features/                                             
│   │	│	├── auth/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── Login.jsx
│   │   │   │   │   ├── Register.jsx
│   │   │   │	│   └── ForgotPassword.jsx
│   │   │   │   ├── authSlice.js
│   │   │   │	└── auth.api.js
│   │	│   ├── dashboard/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │	└── widgets/
│   │   │   │       ├── StatsCard.jsx
│   │   │   │	    └── SaleChart.jsx
│   │	│   ├── products/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── ProductList.jsx
│   │   │   │   │   ├── AddProduct.jsx
│   │   │   │	│   └── EditProduct.jsx
│   │   │   │   ├── components/
│   │   │   │	│   └── ProductForm.jsx
│   │   │   │	└── product.api.js
│   │	│   ├── inventory/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── InventoryDashboard.jsx                  # Overview + stock levels
│   │   │   │   │   ├── StockIn.jsx                             # Add new stock
│   │   │   │   │   ├── StockOut.jsx                            # Remove stock
│   │   │   │   │   ├── LowStockAlert.jsx                       # List of Low-stock items
│   │   │   │	│   └── SupplierInventory.jsx                   # Inventory by supplier
│   │   │   │   ├── components/
│   │   │   │   │   ├── InventoryTable.jsx                      # Table for inventory items
│   │   │   │   │   ├── StockForm.jsx                           # Form for Stock In / Out
│   │   │   │	│   └── ExpiryAlert.jsx                         # Highlight near-expiry products
│   │   │   │	└── inventory.api.js                            # API calls for inventory
│   │	│   ├── sales/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── Billing.jsx
│   │   │   │	│   └── Invoice.jsx
│   │   │   │   ├── components
│   │   │   │   │   ├── Cart.jsx
│   │   │   │	│   └── PaymentModal.jsx
│   │   │   │	└── sales.api.js
│   │	│   ├── customers/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── CustomerList.jsx
│   │   │   │   │   ├── AddCustomer.jsx 
│   │   │   │   │   ├── EditCustomer.jsx
│   │   │   │	│   └── CustomerDetails.jsx
│   │   │   │	└── customer.api.js
│   │	│   ├── suppliers/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── SupplierList.jsx
│   │   │   │   │   ├── AddSupplier.jsx
│   │   │   │   │   ├── EditSupplier.jsx
│   │   │   │	│   └── SupplierDetails.jsx
│   │   │   │	└── supplier.api.js
│   │	│   └── reports/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── SaleReport.jsx
│   │   │       ├── InventoryReport.jsx
│   │   │       ├── CustomerReport.jsx
│   │   │   	└── SupplierReport.jsx
│   │   ├── context/
│   │	│   ├── AuthContext.jsx                                                         
│   │	│   ├── inventoryContext.js                            # Context inventory State   
│   │	│   ├── NotificationContext.jsx                            
│   │   │   └── index.js    
│   │   ├── services/                                          # API call
│   │	│   ├── api.js                                         # Central Axios Instance
│   │	│   ├── authService.js                                
│   │	│   ├── productService.js                     
│   │	│   ├── saleService.js                         
│   │	│   ├── customerService.js
│   │	│   ├── supplierService.js
│   │	│   ├── staffService.js   
│   │   │   └── index.js                                       # Optional , export all service
│   │   ├── hooks/
│   │	│   ├── useAuth.js                                
│   │	│   ├── useFetch.js            
│   │	│   ├── useDebounce.js   
│   │	│   ├── useInventory.js                                # Helper function
│   │	│   ├── useForm.js                            
│   │   │   └── index.js           
│   │   ├── utils/
│   │	│   ├── constants.js                                              
│   │	│   ├── validators.js
│   │	│   ├── inventoryHelper.js
│   │   │   └── helper.js  
│   │   ├── routes/
│   │	│   ├── AppRoutes.jsx
│   │   │   └── RouteConfig.jsx
│   │   ├── App.jsx                                   
│   │   └── main.jsx                                           
│   │   
│   └── data/                     
│       ├── 
│       └── 
├── static/                                     
│   └──    
├── .gitignore 
└── README.md
