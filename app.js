angular.module("Webmail", ["ngSanitize"])
.controller("Webmailctrl", function($scope,$location){

	$scope.dossiers = [
		{ value: "RECEPTION" ,label: "Boite de Réception" , emails: [
			{ id : 1, from: "Bineta" , to: "Aliou", subject: "JE reviens", date: "20/01/2015" ,content:"<b>1Lorem </b>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 2, from: "Mamadou" , to: "Aliou", subject: "Bisous", date: "18/01/2015" ,content:"2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 3, from: "Mams" , to: "Aliou", subject: "Pika", date: "15/01/2015" ,content:"3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 4, from: "Modou" , to: "Aliou", subject: "Hulahup", date: "13/01/2015" ,content:"4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		
		] },
		{ value: "ARCHIVE" ,label: "Archives" , emails: [
			{ id : 5, from: "Bala" , to: "Aliou", subject: "Bon annif", date: "20/01/2015" ,content:"5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 6, from: "Ness" , to: "Aliou", subject: "Konichwa", date: "18/01/2015" ,content:"6Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 7, from: "Maska" , to: "Aliou", subject: "Ca va chier", date: "15/01/2015" ,content:"7Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		
		] },
		{ value: "ENVOYES" ,label: "Envoyés" , emails: [
			{ id : 8, from: "Gourou" , to: "Aliou", subject: "Bien la famille", date: "20/01/2015" ,content:"8Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 9, from: "Kal" , to: "Aliou", subject: "Niger", date: "18/01/2015" ,content:"9Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		
		] },
		{ value: "SPAM" ,label: "Courrier Indésirable" , emails: [
			{ id : 10, from: "Dou" , to: "Aliou", subject: "Envie de rien", date: "20/01/2015" ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 11, from: "Bass" , to: "Aliou", subject: "Besoin Money", date: "18/01/2015" ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		
		] }
	];
	
	$scope.dossierCourant = null;
	$scope.selectionDossier = function(dossier){
			$scope.dossierCourant = dossier;
			$scope.emailselectionne = null;
		
	}
	$scope.emailselectionne = null;
	$scope.versEmail = function(dossier,email){
		$location.path("/" + dossier.value + "/" + email.id);
	}
	$scope.selectionEmail = function(email){
			$scope.emailselectionne = email;
		
	}
	$scope.$watch(function(){
			return $location.path();
	},function(newPath){
		var tabPath = newPath.split("/");
		if(tabPath.length > 1 ){
			var valDossier = tabPath[1];
			$scope.dossiers.forEach(function(item){
				if (item.value == valDossier){
					$scope.selectionDossier(item);
				}
			});
			if(tabPath.length > 2 ){
				var idMail = tabPath[2];
				$scope.dossierCourant.emails.forEach(function(item){
					if (item.id == idMail){
						$scope.selectionEmail(item);
					}
				});
			}
		}
		
		});
});
