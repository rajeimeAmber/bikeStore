

let app = angular.module("myApp",["ngRoute"]);

app.config(["$routeProvider",($routeProvider)=>{

    $routeProvider.when("/main",{
        templateUrl:"views/main.html"
    })
    
    .when("/products",{
        templateUrl:"views/products.html"
    })
    .when("/contacts",{
        templateUrl:"views/contacts.html"
    })
    .when("/checkout",{
        templateUrl:"views/checkout.html"
    })
    .otherwise ({
        redirectTo: "/main"
    })

}])

app.controller('myCtrl', ['$scope', '$http', ($scope, $http)=>{

    
    $http.get('app/lib/data.json').then((datas)=>{

        $scope.items = datas.data; 

        $scope.showInfo = (product)=>{

            // code that displays modal to block element
            let addtocart = document.getElementById('addtocart')
            addtocart.style.display = "block";

            // information for products within json file added to inner html elements
            
            let label = document.getElementById('label');
            label.innerHTML = product.item.name; 

            // let formatterINR = new Intl.NumberFormat('INR', {
            //     style: 'currency',
            //     currency: 'INR'
            // });
         
            let price = document.getElementById('price');
            // let grabPrice = product.item.price
            price.innerHTML = product.item.price;

            // price.innerHTML = formatterINR.format(grabPrice)

            let about = document.getElementById('about');
            about.innerHTML = product.item.about;

            let myImage = document.getElementById('images');
            myImage.src = product.item.image;

            let myRate = document.getElementById('rate');
            myRate.src = product.item.rate;
       
        }

         // When the user clicks on  x the modal closes
            document.querySelector('.close').onclick = function() {
            addtocart.style.display = "none";}

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == addtocart) {
            addtocart.style.display = "none";}}

           
        })
}])
 







