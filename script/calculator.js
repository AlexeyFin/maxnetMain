class hdd_calculator {

    constructor(data, settings) {
        this.data = data;
        this.settings = settings;
        this.form = document.forms['hdd_calculator'];
        this.cameta_type = this.form.elements['camera_type'];
        this.fps = this.form.elements['fps'];
        this.cameras_count = this.form.elements['cameras_count'];
        this.record_duration = this.form.elements['record_duration'];
        this.storage_duration = this.form.elements['storage_duration'];
        this.intensity_of_recording = this.form.elements['intensity_of_recording'];


        this.init()
    }

    init() {

        this.setCamerasList();
        this.setFpsList();
        this.setCamerasCountList();
        this.setRecountDurationList();
        this.setStorageDurationList();
        this.events();
    }

    // Basic setters
    setCamerasList() {
        this.data.forEach(camera => {
            this.cameta_type.insertAdjacentHTML('beforeEnd',
                `<option value="${camera["camera_type"]}">${camera["camera_type"]}</option>`)
        })
    }

    setFpsList() {
        let list = [];
        this.data.forEach(camera => {
            camera["fps_list"].forEach(fps => {
                let index = list.indexOf(fps) + 1;
                if (!index) {
                    list.push(fps);
                    this.fps.insertAdjacentHTML('beforeEnd',
                        `<option value="${fps}">${fps}</option>`)
                }
            })
        });


    }

    setCamerasCountList() {
        for (let i = 1; i <= this.settings.cameras_count; i++) {
            this.cameras_count.insertAdjacentHTML('beforeEnd',
                `<option value="${i}">${i}</option>`)
        }
    }

    setRecountDurationList() {
        for (let i = 1; i <= 24; i++) {
            this.record_duration.insertAdjacentHTML('beforeEnd',
                `<option value="${i}">${i}</option>`)
        }
    }

    setStorageDurationList() {
        for (let i = 1; i <= 30; i++) {
            this.storage_duration.insertAdjacentHTML('beforeEnd',
                `<option value="${i}">${i}</option>`)
        }
    }

    // Methods
    //Getters

    getCameraByCamera_type(type) {
        return this.data.filter(camera => camera['camera_type'] === type)[0]
    }

    getBytes(camera) {

    }

    // Event Listeners

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();

            console.log(this.getCameraByCamera_type(this.cameta_type.value))
        })
    }

}

let hdd_calc = new hdd_calculator(cameras, {
    cameras_count: 20
})
