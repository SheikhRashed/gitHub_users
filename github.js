class Github{

  constructor(){
    this.client_id = 'a17e831725c7651988e6';
    this.client_secret = '48c0e254a7058e094ce9dc3564795856c9f7a07c';
    this.repos_count = 6;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
      profile,
      repos
    };
  }
}