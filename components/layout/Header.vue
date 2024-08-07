<template>
    <header>
        <div class="icon-container">
            <NuxtLink to="/">
                <MainIcon class="icon" />
            </NuxtLink>
        </div>
        <nav>
            <ul role="list">
                <li class="icon-container">
                    <NuxtLink to="/">
                        <MainLink class="icon" />
                    </NuxtLink>
                </li>
                <li class="icon-container">
                    <NuxtLink to="/movies">
                        <MoviesLink class="icon" />
                    </NuxtLink>
                </li>
                <li class="icon-container">
                    <NuxtLink to="/tv">
                        <TvLink class="icon" />
                    </NuxtLink>
                </li>
                <li class="icon-container">
                    <NuxtLink to="/bookmarks">
                        <BookmarkIcon class="icon" />
                    </NuxtLink>
                </li>
            </ul>
        </nav>
        <div>
            <!-- <button>login</button> -->
        </div>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    inset: var(--main-padding);
    width: var(--header-width);
    background-color: var(--element-background);
    border-radius: 1rem;
    display: grid;
    gap: var(--main-padding);
    grid-template-rows: var(--header-width) 1fr var(--header-width);
    grid-template-columns: 100%;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    width: calc(var(--header-width) * 0.5);
    aspect-ratio: 1;
    fill: var(--element-color);
}

ul[role='list'] {
    display: grid;
    gap: 2rem;
}

ul[role='list'] .icon {
    width: calc(var(--header-width) * 0.3);
}

ul[role='list'] .router-link-active .icon {
    fill: #fff;
}
</style>