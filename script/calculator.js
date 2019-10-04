class hdd_calculator {

    constructor(data, settings) {
        this.data = data;
        this.settings = settings;
        this.wrap = document.querySelector(this.settings.frame_selector);
        this.units_wrap = this.wrap.querySelector('.units');

        this.form = document.forms['hdd_calculator'];
        this.camera_type = this.form.elements['camera_type'];
        this.fps = this.form.elements['fps'];
        this.cameras_count = this.form.elements['cameras_count'];
        this.record_duration = this.form.elements['record_duration'];
        this.storage_duration = this.form.elements['storage_duration'];
        this.intensity_of_recording = this.form.elements['intensity_of_recording'];
        this.compression_format = this.form.elements['compression_format'];
        this.result_field = this.wrap.querySelector('input[name="result_field"]');


        this.init()
    }

    init() {

        this.setCamerasList();
        this.setFpsList();
        this.setCamerasCountList();
        this.setRecountDurationList();
        this.setStorageDurationList();
        this.events();
        this.checkForm();

    }

    // Basic setters
    setCamerasList() {
        this.data.forEach(camera => {
            this.camera_type.insertAdjacentHTML('beforeEnd',
                `<option value="${camera["camera_type"]}">${camera["camera_type"]}</option>`)
        })
    }

    setFpsList() {
        let list = [];

        this.settings.fps_list.forEach(fps => {
            this.fps.insertAdjacentHTML('beforeEnd',
                `<option value="${fps}">${fps}</option>`)
        })


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

    getBitrate(camera) {

        let formData = this.getFormData();
        let compression = camera.compression.filter(item => item.compression_format === formData['compression_format'])[0];
        let prop_object = compression.property.filter(item => {

            return item.fps === formData['fps']
        })[0];

        return prop_object.bitrate
    }

    getFormData() {
        return {
            camera_type: this.camera_type.value,
            fps: this.fps.value,
            cameras_count: this.cameras_count.value,
            record_duration: this.record_duration.value,
            storage_duration: this.storage_duration.value,
            intensity_of_recording: this.intensity_of_recording.value,
            compression_format: this.compression_format.value

        }
    }

    getTotalResult(bitrate) {
        let data = this.getFormData();
        let kbytes = bitrate / 8;
        let result = data.intensity_of_recording * kbytes * data.record_duration * 3600 *
        data.storage_duration * data.cameras_count / 1000000;


        return result.toFixed(2)

    }

    checkForm() {
        let data = this.getFormData();
        let status = false;
        for (let prop in data) {

            if (data[`${prop}`]) {
                status = true
            } else {
                status = false;
                break
            }
        }
        if (!status) {
            this.form.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled')
        } else {
            this.form.querySelector('button[type="submit"]').removeAttribute('disabled')
        }

    }

    scrollToTop() {
        this.wrap.scrollIntoView({
            behavior: 'smooth'
        });
    }

    setResult(result) {

        if (result / 1000 < 1) {
            this.result_field.value = result;
            this.units_wrap.innerHTML = "ГБ"
        } else if (result / 1000 > 1) {
            this.result_field.value = (result / 1000).toFixed(2);
            this.units_wrap.innerHTML = "ТБ"
        }

    }

    // Event Listeners

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();

            let camera = this.getCameraByCamera_type(this.camera_type.value);
            let bitrate = this.getBitrate(camera);
            let res = this.getTotalResult(bitrate);
            this.scrollToTop();
            this.setResult(res);
            console.log(res)
        });
        this.form.addEventListener('change', e => {
            this.checkForm()
        })

    }

}
class battery_time_calculator {
    constructor(settings) {

        this.settings = settings;
        this.form = document.forms['bat_time_calculator'];
        this.totalPower = this.form.elements['time_summary_power'];
        this.nominalVoltage = this.form.elements['time_voltage'];
        this.batteryesCount = this.form.elements['time_battery_count'];
        this.batteryCapacity = this.form.elements['time_battery_capacity'];
        this.capacity_result_field = document.querySelector('input[name="time_capacity_result"]');
        this.time_result_field = document.querySelector('input[name="time_result"]');
        this.wrap = document.querySelector(this.settings.frame_selector);

        this.KPD = 0.85;
        this.powerReserv = 1.2;

        this.init();
    }

    init() {
        this.checkForm();
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.setResult(this.getResult());
            this.scrollToTop()


        });

        this.form.addEventListener('change', e => {
            this.checkForm();
        });

        let numInputs = Array.from(this.form.querySelectorAll('[data-type="number"]'))

        numInputs.forEach(input => {
            input.addEventListener("input", e => {
                battery_time_calculator.numberRegExp(input)
            })
        })
    }

    checkForm() {
        if (!this.totalPower.value || !this.nominalVoltage.value || !this.batteryesCount.value || !this.nominalVoltage.value) {

            this.form.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled')
        } else {
            this.form.querySelector('button[type="submit"]').removeAttribute('disabled')
        }
    }

    getResult() {
        let totalCapacity = this.nominalVoltage.value * this.batteryCapacity.value * this.batteryesCount.value;
        let time = (totalCapacity * this.KPD) / (this.totalPower.value * this.powerReserv);

        return {
            cap: totalCapacity.toFixed(0),
            time: Math.floor(time)
        }
    }

    setResult(result) {
        this.capacity_result_field.value = result.cap;
        this.time_result_field.value = result.time;
    }

    static numberRegExp(inp) {
        if (!(/^[0-9]*$/).test(inp.value)) {
            inp.value = inp.value.slice(0, inp.value.length -1);
        }
    }

    scrollToTop() {
        this.wrap.scrollIntoView({
            behavior: 'smooth'
        });
    }




}

let hdd_calc = new hdd_calculator(cameras, {
    cameras_count: 20,
    fps_list: ["30", "25", "20", "15", "12.5", "10", "1"],
    frame_selector: '#hdd_calculator_frame'
});
let bat_time_calc = new battery_time_calculator({'frame_selector' : '#working_time_calculator_frame'});
