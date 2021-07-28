const submit = (event) => {
    const date = document.getElementById('date').value
    const name = document.getElementById('name').value
    const surname = document.getElementById('surname').value
    const type = selectType.value
    const reason = document.getElementById('reasonSubstantiation') !== null ? document.getElementById('reasonSubstantiation').value : ''
    const start = document.getElementById('start').value
    const end = document.getElementById('end').value
    const deputy = document.getElementById('deputy').value
    const days = document.getElementById('days').value
    const hours = document.getElementById('hours').value

    const dateDiv = document.getElementById('dateDiv')
    const nameSurnameDiv = document.getElementById('nameSurnameDiv')
    const startDiv = document.getElementById('startDiv')
    const endDiv = document.getElementById('endDiv')
    const deputyDiv = document.getElementById('deputyDiv')
    const daysDiv = document.getElementById('daysDiv')
    const hoursDiv = document.getElementById('hoursDiv')
    const vacationCheckbox = document.getElementById('vacationCheckbox')
    const demandChexbox = document.getElementById('demandCheckbox')
    const occasionalCheckbox = document.getElementById('occasionalCheckbox')
    const occasionalReasonDiv = document.getElementById('occasionalReasonDiv')
    const freeCheckbox = document.getElementById('freeCheckbox')
    const freeReasonDiv1 = document.getElementById('freeReasonDiv1')
    const freeReasonDiv2 = document.getElementById('freeReasonDiv2')
    const careCheckbox = document.getElementById('careCheckbox')

    dateDiv.innerHTML = ''
    nameSurnameDiv.innerHTML = ''
    startDiv.innerHTML = ''
    endDiv.innerHTML = ''
    deputyDiv.innerHTML = ''
    daysDiv.innerHTML = ''
    hoursDiv.innerHTML = ''
    vacationCheckbox.checked = false
    demandChexbox.checked = false
    occasionalCheckbox.checked = false
    occasionalReasonDiv.innerHTML = ''
    freeCheckbox.checked = false
    freeReasonDiv1.innerHTML = ''
    freeReasonDiv2.innerHTML = ''
    careCheckbox.checked = false


    const data = {
        date,
        name,
        surname,
        type,
        reason,
        start,
        end,
        deputy,
        days,
        hours
    }

    dateDiv.innerHTML = data.date
    nameSurnameDiv.innerHTML = data.name + " " + data.surname
    startDiv.innerHTML = data.start
    endDiv.innerHTML = data.end
    deputyDiv.innerHTML = data.deputy
    daysDiv.innerHTML = data.days
    hoursDiv.innerHTML = data.hours

    if (data.type === "wypoczynkowy") {
        vacationCheckbox.checked = true
    } 
    if (data.type === "zadanie") {
        demandChexbox.checked = true
    }
    if (data.type === "okolicznosciowy") {
        occasionalCheckbox.checked = true
        occasionalReasonDiv.innerHTML = data.reason
    }
    if (data.type === "wolny") {
        freeCheckbox.checked = true
        const reasonArr = data.reason.split(" ")
        const reasonFirstLine = reasonArr[0] + " " + reasonArr[1]
        const reasonSecondLineArr = reasonArr.slice(2)
        const reasonSecondLine = reasonSecondLineArr.join(" ")
        freeReasonDiv1.innerHTML = reasonFirstLine
        freeReasonDiv2.innerHTML = reasonSecondLine
    } 
    if (data.type === "opieki") {
        careCheckbox.checked = true
    }
    
    event.preventDefault()
}

const handleType = () => {
    if (type.value === type[2].value || type.value === type[3].value) {
        if (document.getElementById('reason') === null) {
            const reasonName = document.createElement('label')
            const reasonSubstantiation = document.createElement('input')
            const reasonWrapper = document.createElement('span')
            
            reasonName.className = 'form-label'
            reasonName.innerHTML = 'Powód: '
            
            reasonSubstantiation.type = 'text'
            reasonSubstantiation.className = 'input-group-text'
            reasonSubstantiation.id = 'reasonSubstantiation'
            reasonSubstantiation.required = true
            
            reasonWrapper.appendChild(reasonName)
            reasonWrapper.appendChild(reasonSubstantiation)
            reasonWrapper.id = "reason"
            selectType.parentElement.insertBefore(reasonWrapper, selectType.nextElementSibling)
        }
    } else {
        if (document.getElementById('reason') !== null) {
            const reasonWrapper = document.getElementById('reason');
            selectType.parentElement.removeChild(reasonWrapper)
        }
    }
}

const selectType = document.getElementById('type')
selectType.addEventListener('change', handleType)

const form = document.getElementById('form');
form.addEventListener('submit', submit)

const dateField = document.getElementById('date')
const startField = document.getElementById('start')
const endField = document.getElementById('end')

const today = new Date()
const dd = today.getDate() < 10 ? '0' + today.getDate() : today.getDate()
const mm = today.getMonth() + 1 < 10 ?  '0' + (today.getMonth() + 1) : today.getMonth() + 1
const yyyy = today.getFullYear()

todayDate = `${yyyy}-${mm}-${dd}`

dateField.defaultValue = todayDate
dateField.setAttribute('min', todayDate)
startField.defaultValue = todayDate
startField.setAttribute('min', todayDate)
endField.defaultValue = todayDate
endField.setAttribute('min', todayDate)
