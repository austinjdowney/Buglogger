import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'

class BugsService {
  async getAllBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async getBugById(id) {
    const res = await api.get('api/bugs/' + id)
    AppState.activeBug = res.data
  }

  async addBug(data) {
    const res = await api.post('api/bugs', data)
    router.push({ name: 'BugDetails', params: { id: res.data.id } })
  }

  async closeBug(id) {
    await api.delete('api/bugs/' + id)

    // HOW TO SWITCH THE TRUE AND FALSE TO OPEN AND CLOSED
    //
    // if (bugs.id.closed === false) {
    //   return 'Open'
    // } else {
    //   return 'Closed'
    // }
  }

  // async hideClosed(){
  //   let sortedBugs= this.bugs
  //   sortedBugs= sortedBugs.sort(a,b).reverse() => {
  //     let aBugs = a.title.toLowerCase(), bBugs = b.toLowerCase();
  //     if (aBugs <bBugs){
  //       return -1
  //     } if (aBugs > bBugs) {
  //       return 1
  //     }
  //     return 0
  //   }
  // }
}

export const bugsService = new BugsService()
