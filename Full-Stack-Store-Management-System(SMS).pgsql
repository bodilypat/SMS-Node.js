Full-Stack-Store-Management-System(SMS)
│   
├── backend(SMS Node.js)
│   ├── app/
│   │   ├── __init__.py                          
│   │   ├── main.py
│   │   ├── config/                       
│   │   │   ├── db.py
│   │   │   ├── setting.py
│   │   │   └── __init__.py
│   │   ├── models/                          
│   │   │   ├── user.py
│   │   │   ├── product.py
│   │   │   ├── category.py
│   │   │   ├── order.py
│   │   │   ├── customer.py
│   │   │   └── supplier.py
│   │   ├── schemas/                          
│   │   │   ├── auth_schema.py
│   │   │   ├── product_schema.py
│   │   │   ├── category_schema.py
│   │   │   ├── order_schema.py
│   │   │   ├── customer_schema.py
│   │   │   └── supplier_schema.py
│   │   ├── controllers/                          
│   │   │   ├── auth_controller.py
│   │   │   ├── product_controller.py
│   │   │   ├── category_controller.py
│   │   │   ├── order_controller.py
│   │   │   ├── customer_controller.py
│   │   │   └── supplier_controller.py
│   │   ├── routes/                          
│   │   │   ├── auth_routes.py
│   │   │   ├── product_routes.py
│   │   │   ├── category_routes.py
│   │   │   ├── order_route.py
│   │   │   ├── customer_route.py
│   │   │   └── supplier_route.py
│   │   ├── services/                          
│   │   │   ├── auth_service.py
│   │   │   ├── product_service.py
│   │   │   ├── category_service.py
│   │   │   ├── order_service.py
│   │   │   ├── customer_service.py
│   │   │   └── supplier_service.py
│   │   ├── middlewares/                          
│   │   │   ├── auth_middleware.py
│   │   │   └── error_middleware.py
│   │   ├── utils/                          
│   │   │   ├── helpers.py
│   │   │   ├── validators.py
│   │   │   └── response.py
│   │   ├── providers/                          
│   │   │   ├── email_provider.py
│   │   │   ├── payment_provider.py
│   │   │   └── sms_provider.py
│   │   ├── tests/                          
│   │   │   ├── test_auth.py
│   │   │   ├── test_product.py
│   │   │   └── test_order.js
│   │   ├── app.js                          
│   │   └── server.js 
│	├── requirements.txt
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
