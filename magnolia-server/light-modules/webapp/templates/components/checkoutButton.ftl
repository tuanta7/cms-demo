[#import "/webapp/includes/macros/editMode.ftl" as editMode]

[#if content.pageLinkChooser?has_content && content.pageLinkChooser.field?has_content]
    [#if content.pageLinkChooser.field == "internalPageLink" && content.pageLinkChooser.internalLink?has_content]
        [#assign link = cmsfn.link(cmsfn.contentByPath(content.pageLinkChooser.internalLink)!)!]
    [#elseif content.pageLinkChooser.field == "externalPageLink" && content.pageLinkChooser.externalLink?has_content]
        [#assign link = content.pageLinkChooser.externalLink!]
        [#assign isExternal = true]
    [/#if]
[/#if]

[#assign disabled = false]
[#if (content.disabled?has_content && content.disabled == true) || !link?has_content]
    [#assign disabled = true]
[/#if]

[#if content.variant?has_content && content.variant=="primary"][#assign variantClass = "bg-blue-500 hover:bg-blue-700 text-white"][/#if]
[#if content.variant?has_content && content.variant=="secondary"][#assign variantClass = "bg-gray-500 hover:bg-gray-700 text-white"][/#if]
[#if content.variant?has_content && content.variant=="ternary"][#assign variantClass = "bg-green-500 hover:bg-green-700 text-white"][/#if]
[#if content.variant?has_content && content.variant=="outline"][#assign variantClass = "bg-transparent border border-gray-500 hover:bg-gray-100 text-gray-700"][/#if]
[#if content.variant?has_content && content.variant=="link"][#assign variantClass = "bg-transparent text-blue-500 hover:underline"][/#if]

[#if content.size?has_content && content.size=="small"][#assign sizeClass = "py-1 px-2 text-sm"][/#if]
[#if content.size?has_content && content.size=="medium"][#assign sizeClass = "py-2 px-4 text-base"][/#if]
[#if content.size?has_content && content.size=="large"][#assign sizeClass = "py-3 px-6 text-lg"][/#if]

[@editMode.wrapContent]
    <style>
        .btn-focus:focus-visible {
            outline: none;
            box-shadow: 0 0 0 2px white, 0 0 0 4px rgba(59, 130, 246, 0.6);
        }
    </style>
    <div class="p-2">
        <a
            [#if !disabled]href="${link!}"[/#if]
            class="btn-focus ${variantClass!} ${sizeClass!} font-bold rounded focus:outline-none [#if disabled]opacity-50 cursor-not-allowed pointer-events-none[/#if]"
            [#if disabled]tabindex="-1"[/#if]
            [#if content.backgroundColor?has_content]style="background-color: ${content.backgroundColor}"[/#if]
            [#if isExternal!false]target="_blank" rel="noopener noreferrer"[/#if]
            role="button"
            aria-disabled="${disabled?c}"
        >
            ${content.title!}
        </a>
    </div>
[/@editMode.wrapContent]