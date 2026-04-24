[#import "/webapp/includes/macros/editMode.ftl" as editMode]
[#import "/webapp/includes/macros/image.ftl" as image]

[#assign imageNode = content.imageChooser!]
[#assign linkNode = content.linkChooser!]
[#assign imagePosition = (imageNode.imagePosition)!'top']
[#assign imageClass = "w-full h-full object-cover object-center"]

[#assign hasImage = false]
[#if imageNode?has_content && imageNode.field?has_content]
    [#if imageNode.field == "image" && image.hasImage(imageNode.image!"")]
        [#assign hasImage = true]
    [#elseif imageNode.field == "externalImage" && imageNode.externalImage?has_content]
        [#assign hasImage = true]
    [/#if]
[/#if]

[#assign layoutClass = "card-layout-top"]
[#if hasImage && imagePosition == "left"]
    [#assign layoutClass = "card-layout-left"]
[#elseif hasImage && imagePosition == "right"]
    [#assign layoutClass = "card-layout-right"]
[/#if]

[#-- Link data --]
[#assign linkHref = ""]
[#assign linkText = ""]
[#assign isExternal = false]
[#if linkNode?has_content && linkNode.field?has_content]
    [#if linkNode.field == "internalLink" && linkNode.internalLink?has_content]
        [#assign linkHref = cmsfn.link(cmsfn.contentByPath(linkNode.internalLink, "website"))!]
        [#assign linkText = linkNode.linkText!""]
    [#elseif linkNode.field == "externalLink" && linkNode.externalLink?has_content]
        [#assign linkHref = linkNode.externalLink]
        [#assign linkText = linkNode.linkText!""]
        [#assign isExternal = true]
    [/#if]
[/#if]

[@editMode.wrapContent]
    <style>
        .card-layout-top, .card-layout-left, .card-layout-right { display: flex; flex-direction: column; }
        .card-layout-top .card-image { width: 100%; height: 12rem; }
        .card-layout-left .card-image, .card-layout-right .card-image { width: 100%; height: 12rem; }
        @media (min-width: 640px) {
            .card-layout-left { flex-direction: row; }
            .card-layout-right { flex-direction: row-reverse; }
            .card-layout-left .card-image, .card-layout-right .card-image { width: 33.333%; height: auto; }
        }
        .card-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px white, 0 0 0 4px rgba(59, 130, 246, 0.6); }
    </style>
    <div class="w-full p-4">
        <div class="${layoutClass} overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
            [#if hasImage]
                <div class="card-image overflow-hidden flex-shrink-0">
                    [#if imageNode.field == "image"]
                        [@image.renderImageWithClass imageNode.image imageNode.imageAlt!"Image" imageClass /]
                    [#else]
                        [@image.renderExternalImageWithClass imageNode.externalImage imageNode.externalImageAlt!"Image" imageClass /]
                    [/#if]
                </div>
            [/#if]

            <div class="p-6 flex flex-col justify-center flex-grow">
                [#if content.title?has_content]
                    <h2 class="font-bold text-xl mb-2">${content.title}</h2>
                [/#if]
                [#if content.description?has_content]
                    <div class="text-gray-700">${cmsfn.decode(content).description}</div>
                [/#if]
                [#if linkHref?has_content]
                    <div class="mt-4">
                        <a href="${linkHref}" 
                           class="card-btn inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none"
                           [#if isExternal]target="_blank" rel="noopener noreferrer"[/#if]>
                            ${linkText}
                        </a>
                    </div>
                [/#if]
            </div>
        </div>
    </div>
[/@editMode.wrapContent]