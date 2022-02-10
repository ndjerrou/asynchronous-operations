// How ot handle asynchronous operations ?

////////////////////////////////////////////// CALLBACKS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function getRepositories(cb){
    setTimeout(() => {
        console.log('Getting repos of Mahfod...')
         cb(['repo1', 'repo2', 'repo3'])
    }, 2000);
}

function getCommits(cb){
    setTimeout(() => {
        console.log('Gettings commits from repo number 1...')
        cb(['Commit 1', 'Commit 2', 'Commit 3'])
    }, 2000);
}

function getACommit(cb){
    setTimeout(() => {
        console.log('Getting the first commit ...')
        cb('Commit 1')
    }, 2000);
}

// getRepositories( //callback hell
//     (data) => {
//         console.log(data)
//         getCommits(
//             (commits) => {
//                 console.log(commits)
//                 getACommit((commit)=>console.log(commit))
//             }
//         )
//     }
// )

////////////////////////////////////////////// PROMISES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function getRepositoriesPromises(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['Repo1', 'Repo2', 'Repo3'])
        }, 2000);
    })
}

function getCommits(cb){
    setTimeout(() => {
        console.log('Gettings commits from repo number 1...')
        cb(['Commit 1', 'Commit 2', 'Commit 3'])
    }, 2000);
}

getRepositoriesPromises().then(repos=>console.log(repos))

