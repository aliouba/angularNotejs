angular.module("Webmail", ["ngSanitize"])
.controller("Webmailctrl", function($scope,$location,$filter){

	$scope.dossiers = [
		{ value: "RECEPTION" ,label: "Boite de Réception" , emails: [
			{ id : 1, from: "Bineta" , to: "Aliou", subject: "JE reviens", date: new Date(2012,2,20,12,40) ,content:"<b>1Lorem </b>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 2, from: "Mamadou" , to: "Aliou", subject: "Bisous", date: new Date(2013,2,20,12,40) ,content:"2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 3, from: "Mams" , to: "Aliou", subject: "Pika", date: new Date(2012,2,1,12,40)  ,content:"3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 4, from: "Modou" , to: "Aliou", subject: "Hulahup", date: new Date(2012,2,3,12,40)  ,content:"4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		
		] },
		{ value: "ARCHIVE" ,label: "Archives" , emails: [
			{ id : 5, from: "Bala" , to: "Aliou", subject: "Bon annif", date: new Date(2014,5,20,12,40)  ,content:"5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 6, from: "Ness" , to: "Aliou", subject: "Konichwa", date: new Date(2014,2,20,12,40)  ,content:"6Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 7, from: "Maska" , to: "Aliou", subject: "Ca va chier", date: new Date(2014,2,20,12,40)  ,content:"7Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		
		] },
		{ value: "ENVOYES" ,label: "Envoyés" , emails: [
			{ id : 8, from: "Gourou" , to: "Aliou", subject: "Bien la famille", date: new Date(2012,2,20,12,10) ,content:"8Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 9, from: "Kal" , to: "Aliou", subject: "Niger", date: new Date(2012,2,20,12,40)  ,content:"9Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		
		] },
		{ value: "SPAM" ,label: "Courrier Indésirable" , emails: [
			{ id : 10, from: "Dou" , to: "Aliou", subject: "Envie de rien", date: new Date(2012,3,20,12,40) ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{ id : 11, from: "Bass" , to: "Aliou", subject: "Besoin Money", date: new Date(2013,2,20,12,40)  ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		
		] }
	];
	
	$scope.dossierCourant = null;
	$scope.selectionDossier = function(dossier){
	 		$scope.dossierCourant = dossier;
			$scope.emailselectionne = null;
			if(dossier){
				$scope.nouveauMail = null;
			}
			
		
	}
	$scope.emailselectionne = null;
	$scope.versEmail = function(dossier,email){
		$location.path("/" + dossier.value + "/" + email.id);
	}
	$scope.selectionEmail = function(email){
			$scope.emailselectionne = email;
		
	}
	
	//tri
	$scope.champTri = null;
	$scope.triDescendant = false;
	$scope.triEmails = function(champ){
		if($scope.champTri == champ){
			$scope.triDescendant = !$scope.triDescendant;
		}
		else{
			$scope.champTri = champ;
			$scope.triDescendant = false;
		}
	}

	
	$scope.cssChevronsTri = function(champ){
		return { 
			glyphicon: $scope.champTri == champ,
			'glyphicon-chevron-up': $scope.champTri   == champ && !$scope.triDescendant ,
			'glyphicon-chevron-down': $scope.champTri   == champ && $scope.triDescendant }
	}


	//Recherche
	$scope.recherche = null;
	$scope.razRecherche = function(){
		$scope.recherche = null; 
	}  
	//~ $scope.getDossiersFiltres = function(){
		//~ return $filter("filter")($scope.dossierCourant.emails,$scope.recherche);	
	//~ }
	
	//Creation d'E-mail
	$scope.nouveauMail = null;
	$scope.razMail = function(){
		$scope.nouveauMail = {
			from: "Aliou", 
			date: new Date()
		};	
	}
	$scope.idProchainmail = 12;
	$scope.envoiMail = function(){
		$scope.dossiers.forEach(function(item){
			if(item.value == "ENVOYES"){
				$scope.nouveauMail.id = $scope.idProchainmail++;
				item.emails.push($scope.nouveauMail);
				$scope.nouveauMail = null;
				$location.path("/");
			}
		});
	}
	
	
	$scope.$watch(function(){
			return $location.path();
	},function(newPath){
		var tabPath = newPath.split("/");
		if(tabPath.length > 1 ){
			if(tabPath[1] == "nouveauMail"){
				$scope.razMail();
				$scope.selectionDossier() = null;
			}
			else{
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
		}
		
		});
})
.filter("surbrillanceRecherche",function(){
	return  function(input,recherche){
		if(recherche){
			return input.replace(new RegEx("(" + recherche +")","gi"),"<span class='surbrillanceRecherche'>$1</span>");
		}
		return input;
		
	}
});
