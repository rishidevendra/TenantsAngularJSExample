/// <reference path="flightService.js" />
(function (app) {

    var tenant =
                  [  
                      {
                          Id : 1,
                          FirstName: "dev",
                          LastName: "rishi",
                          Company: "ABC",
                          JobTitle: "Sr Software Engineer",
                          BusinessPhone: "2222",
                          HomePhone: "22212",
                          MobilePhone: "21232",
                          FaxNumber: "221212",
                          Street: "2300 state bridge road ",
                          City: "pune",
                          State: "MH",
                          Country: "Ind",
                          Email: "abc@example.com",
                          WebPage: "test.com"
                                                   
                      },
                      {
                           Id : 2,
                           FirstName: "prachi",
                           LastName: "nan",
                           Company: "ABC",
                           JobTitle: "Software Developer",
                           BusinessPhone: "234",
                           HomePhone: "2323",
                           MobilePhone: "2323",
                           FaxNumber: "123433",
                           Street: "23 near temple",
                           City: "Ind",
                           State: "MH",
                           Country: "Ind",
                           Email: "abc@example.com",
                           WebPage: "www.example.com"
                       },
                        {
                            Id: 3,
                            FirstName: "nil",
                            LastName: "risbud",
                            Company: "bb",
                            JobTitle: "Software engineer",
                            BusinessPhone: "2122323",
                            HomePhone: "3233223",
                            MobilePhone: "232312",
                            FaxNumber: "23232312",
                            Street: "1223 phenoix",
                            City: "pune",
                            State: "MH",
                            Country: "Ind",
                            Email: "abc@example.com",
                            WebPage: "www.example.com"
                        },
                  ];


    var tenantService = function () {
        var tenantFactory = {};

        tenantFactory.getTenant = function (index) {
            var returnTenant = [];
            if (tenantFactory.isOverflow(index))
            {
                index = 0;
            }
            returnTenant.push(tenant[index]);
            return returnTenant;
        };

        tenantFactory.isOverflow = function (index){

            return (tenant.length <= index)
        };

        tenantFactory.addTenant = function (index) {
            var returnTenant = [];
            var newIndex = tenant.length + 1;
            tenant.push(tenantFactory.newItem(newIndex));
            returnTenant.push(tenant[tenant.length -1]);
            return (returnTenant)
        };

         tenantFactory.deleteTenant = function (index) {
            var returnTenant = [];

            tenant.splice(index,1);
           if (tenant.length <= index)
           {
               index = tenant.length -1;
           }
            returnTenant.push(tenant[index]);
            return (returnTenant)
        };

        tenantFactory.newItem = function (index) {

            var newItem = {

                Id: index,
                FirstName: "",
                LastName: "",
                Company: "",
                JobTitle: "",
                BusinessPhone: "",
                HomePhone: "",
                MobilePhone: "",
                FaxNumber: "",
                Street: "",
                City: "",
                State: "",
                Country: "",
                Email: "",
                WebPage: ""
            }
            return newItem;

        }

        return tenantFactory;
    };
    app.factory("tenantService", tenantService);

}(angular.module("tenantsApp")));