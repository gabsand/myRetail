class ImageViewerDirective implements ng.IDirective {
    restrict = 'EA';
    require = 'ngModel';
    templateUrl = 'imageViewer.html';
    replace = true;
    link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

    constructor(Images: Array<any>) {

    }

    static factory(): ng.IDirectiveFactory {
        const directive = (images: Array<any>) => new ImageViewerDirective(images);
        directive.$inject = [];
        return directive;
    }
}

app.directive('imageViewerDirective', ImageViewerDirective.factory());