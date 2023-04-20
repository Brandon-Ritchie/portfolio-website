<script>
    import '../global.scss'

    const headerLinks = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Projects',
            link: '/projects'
        },
        {
            name: 'Blog',
            link: '/blog'
        }
    ]
</script>

<div class="header">
    <ul>
        {#each headerLinks as link}
            <li>
                <a href={link.link}>{link.name}</a>
            </li>
        {/each}
    </ul>
</div>

<slot/>

<style lang="scss">

</style>
