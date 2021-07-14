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

    document.getElementById('dateDiv').innerHTML = data.date
    document.getElementById('nameSurnameDiv').innerHTML = data.name + " " + data.surname
    document.getElementById('startDiv').innerHTML = data.start
    document.getElementById('endDiv').innerHTML = data.end
    document.getElementById('deputyDiv').innerHTML = data.deputy
    document.getElementById('daysDiv').innerHTML = data.days
    document.getElementById('hoursDiv').innerHTML = data.hours

    if (data.type === "wypoczynkowy") {
        document.getElementById('vacationCheckbox').checked = true
    } 
    if (data.type === "zadanie") {
        document.getElementById('demandCheckbox').checked = true
    }
    if (data.type === "okolicznosciowy") {
        document.getElementById('occasionalCheckbox').checked = true
        document.getElementById('occasionalReasonDiv').innerHTML = data.reason
    }
    if (data.type === "wolny") {
        document.getElementById('freeCheckbox').checked = true
        const reasonArr = data.reason.split(" ")
        const reasonFirstLine = reasonArr[0] + " " + reasonArr[1]
        const reasonSecondLineArr = reasonArr.slice(2)
        const reasonSecondLine = reasonSecondLineArr.join(" ")
        document.getElementById('freeReasonDiv1').innerHTML = reasonFirstLine
        document.getElementById('freeReasonDiv2').innerHTML = reasonSecondLine
    } 
    if (data.type === "opieki") {
        document.getElementById('careCheckbox').checked = true
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
startField.defaultValue = todayDate
endField.defaultValue = todayDate
