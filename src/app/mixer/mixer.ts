import { Channel } from '../timeline/channel'





export class Mixer {

    public static _instance: Mixer

    public channels: Channel[] = []

    public masterChannel: Channel

    public currentChannel: Channel


    constructor() {

        this.masterChannel = new Channel()

        this.channels.push(this.masterChannel)
    }

    public static get instance() {

        if(Mixer._instance == null) Mixer._instance = new Mixer()

        return Mixer._instance
    }

    public selectChannel() {

    }

    public addChannel() {

        return this.channels[this.channels.push(new Channel()) - 1]
    }


    public removeChannel(channel: Channel) {

        return this.channels.splice(this.channels.indexOf(channel), 1)
    }
}