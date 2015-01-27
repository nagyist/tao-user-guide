<nav class="sidebar">
    <h1>
        <ins class="icon-menu"></ins>
        Menu
    </h1>
    <ul>
        {loop="$tree"}
            <li  class=" {if="strpos($active, $value.attributes.href)===0"} active {/if} ">
                <a href="..{$value.children[0].attributes.href}"
                        class=" {if="strpos($active, $value.attributes.href)===0"}active{/if}">
                    <span class="icon-{$value.attributes.id}"></span>
                    <span class="icon-arrow-down"></span>{$value.data}
                </a>
                <ul>
                    {loop="$value.children"}
                        <li><a href="..{$value.attributes.href}" id="{$value1.attributes.id}-{$value.attributes.id}"
                               class="{if="$active==$value.attributes.href"}active{/if}">{$value.data}</a></li>
                    {/loop}
                </ul>
            </li>
        {/loop}

    </ul>
</nav>
