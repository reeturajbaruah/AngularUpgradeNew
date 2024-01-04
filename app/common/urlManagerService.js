(function () {
    'use strict';

    // angular.module('HCTRAModule').service('urlManagerService', ['javaObjectUtilService', '$q', 'genericRepo',
    // function (javaObjectUtilService, $q, genericRepo) {

    //     var self = this;
    //     var deferred = $q.defer();
    //     var promise = deferred.promise;

    //     this.metadataDictionary = null;
    //     this.newRoutes = {
    //         //states
    //         //cmsPathDictionary
    //         //cmsIdDictionary
    //     };
    //     this.megaMenuStructure = null;
    //     this.footerCmsResponse = null;

    //     // this function should start running before all other public functions
    //     this.getStartingRoutes = function (angularStatesObject) {
    //         return $q(function (fulfill) {
    //             if (javaObjectUtilService.isEmpty(self.newRoutes)) {
    //                 const request = Object.assign({getMin: true}, angularStatesObject);
    //                 genericRepo.dataFactory.GetAllMenuUrlMetadata(request).then(function (response) {
    //                     if (response.errors.length === 0) {
    //                         self.metadataDictionary = response.metadata;

    //                         const rekeyed = Object.keys(response.metadata).reduce((acc, key)=> {
    //                             const obj = response.metadata[key];

    //                             acc.articleLookupByPath[obj.itemPath] = obj;
    //                             acc.articleLookupById[obj.itemID] = obj;

    //                             return acc;                               
    //                         }, {articleLookupByPath: {}, articleLookupById: {}});

    //                         const { articleLookupByPath, articleLookupById } = rekeyed;
                            
    //                         self.newRoutes = {
    //                             states: response.states,
    //                             articleLookupByPath,
    //                             articleLookupById
    //                         };
    //                         self.megaMenuStructure = response.navBar;
    //                         self.footerCmsResponse = response.footerURls;
    //                         deferred.resolve();
    //                         fulfill(self.newRoutes);
    //                     } else {
    //                         deferred.reject();
    //                         fulfill({ errors: response.errors });
    //                     }

    //                 });
    //             } else {
    //                 fulfill(self.newRoutes);
    //             }
    //         });
    //     };

    //     this.getMegaMenu = function () {
    //         return $q(function (fulfill) {
    //             if (self.megaMenuStructure === null) {
    //                 promise.then(function () { // success
    //                     fulfill({ navBar: self.megaMenuStructure });
    //                 }, function () {//failure
    //                     fulfill({ errors: true });
    //                 });
    //             } else {
    //                 fulfill({ navBar: self.megaMenuStructure });
    //             }
    //         });
    //     };

    //     this.getMetadata = function () {
    //         return $q(function (fulfill) {
    //             if (self.metadataDictionary === null) {
    //                 promise.then(function () {// success
    //                     fulfill({ metadata: self.metadataDictionary });
    //                 }, function () {//failure
    //                     fulfill({ errors: true });
    //                 });
    //             } else {
    //                 fulfill({ metadata: self.metadataDictionary });
    //             }
    //         });
    //     };

    //     this.getFooterdata = function () {
    //         return $q(function (fulfill) {
    //             if (self.footerCmsResponse === null) {
    //                 promise.then(function () {// success
    //                     fulfill({ footerCmsResponse: self.footerCmsResponse });
    //                 }, function () {//failure
    //                     fulfill({ errors: true });
    //                 });
    //             } else {
    //                 fulfill(self.footerCmsResponse);
    //             }
    //         });
    //     };
    // }]);
}());