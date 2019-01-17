class GitHub {
    constructor() {
        this.clientID = "a19020d096253d1d961f",
        this.clientSecret = "99be73ff5f04cb8532b376195d2b895d2e5bd83b"
        this.reposCount = 5;
        this.reposSort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`)

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }   
}