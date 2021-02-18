//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    usingCall();
    usingApply();
    usingBind();


});

//Brad Person Object 
const Brad = {
    firstName: "Brad",
    lastName: "Bansely",
    fullName: function(ui_place, message) {
        ui_place.innerHTML = `${message} ${this.firstName} ${this.lastName}`;
    }
}

function usingCall() {

    //Cerscy Person Object 
    const Cerscy = {
        firstName: "Cerscy ",
        lastName: "Lanster",
    }

    //1. Borrow fullName using call
    Brad.fullName.call(Cerscy, call_demo);
    // Brad.fullName(call_demo, "Hi I am").call(Cerscy, call_demo);

    //2. Pass call_demo[as ui_place] , Hi I am ,[message]
    // call_demo.innerHTML = variable;

}

function usingApply() {

    //Jon Person Object 
    const Jon = {
        firstName: "Jon",
        lastName: "Snow",
    }

    //1. Borrow fullName using apply

    // Answer

    // Brad.fullName(apply_demo, "Hi I am").apply(Jon, ['id: '] )



    //2. Pass apply_demo[as ui_place] and Hi I am ,[as message] as array


}

function usingBind() {

    //Daenerys Person Object 
    const Daenerys = {
        firstName: "Daenerys",
        lastName: "Targaryen",
    }

    //1. Borrow fullName using bind
        Brad.fullName(bind_demo, "Hi I am ,").bind(Daenerys)
    //2. Pass bind_demo[as ui_place] , Hi I am ,[as message]


}