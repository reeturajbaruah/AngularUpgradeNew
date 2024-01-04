module HCTRA.Model {

    export interface CarouselSlide {

        /** src tag for slide image */
        image?: string
        /** target for image being clicked (_blank or _self) */
        targetFrame?: string
        /** href target url when user clicks on slide */
        SlideURL?: string
        /** alt text for the slide's image */
        alt?: string
        /** Contains unparsed Sitecore file tag */
        File?: string
        /** Contains unparsed Sitecore image tag */
        Image?: string
    }
}