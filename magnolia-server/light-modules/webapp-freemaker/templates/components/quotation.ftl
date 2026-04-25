[#import "/webapp-freemaker/includes/macros/editMode.ftl" as editMode]

[#assign count = 1]
[#if content.container?has_content && content.container.count?has_content]
    [#assign count = content.container.count?number!]
[/#if]

[#assign isColumns = false]
[#if content.container?has_content && content.container.field?has_content && content.container.field == "columns"]
    [#assign isColumns = true]
[/#if]

[#assign columnBreakpoint = (count >= 4)?then("lg:flex-row", "md:flex-row")]

[@editMode.wrapContent]
    <div class="p-2">
        <div class="flex gap-4 [#if isColumns]flex-col ${columnBreakpoint}[#else]flex-col[/#if]">
            [#list 1..count as item]
                <div class="[#if isColumns]flex-1[/#if] items-center justify-center">
                    [@cms.area name="item${item}" /]
                </div>
            [/#list]
        </div>
    </div>
[/@editMode.wrapContent]