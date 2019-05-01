$(document).ready(function() {
    var query = []; //array that queries digits
    var opflag = false; //operator flag, prevents the use of multiple operators
    var f = []; //arrays that stores the first operand
    var s = []; //array that stores the second operand
    var op; // stores the operation character
    var result; // stores the result

    //keypress handling

    $(document).on("keypress", function(key) {
        console.log("key pressed: " + key.which); //logs the key pressed
        if (key.which < 48 || key.which > 57) { //handles operator keys

            if (key.which == 43) { // + key
                $("#bt_sum").trigger("click");
            }
            if (key.which == 45) { // - key
                $("#bt_sub").trigger("click");
            }
            if (key.which == 42) { // * key
                $("#bt_multi").trigger("click");
            }
            if (key.which == 47) { // / key
                $("#bt_divi").trigger("click");
            }
            if (key.which == 13 || key.which == 61) { // enter or = key
                $("#bt_result").trigger("click");
            }
            if (key.which == 99) { // C (clear) key 
                $("#bt_clear").trigger("click");
            }
        } else {
            $("#bt_" + (key.which - 48)).trigger("click"); //handles every number key 48 is 0 and 57 is 9
        }
    });


    //number handling
    //pushes each number pressed into the query array
    $("#bt_1").on("click", function() {
        query.push(1);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    $("#bt_2").on("click", function() {
        query.push(2);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    $("#bt_3").on("click", function() {
        query.push(3);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    $("#bt_4").on("click", function() {
        query.push(4);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    $("#bt_5").on("click", function() {
        query.push(5);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    $("#bt_6").on("click", function() {
        query.push(6);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    $("#bt_7").on("click", function() {
        query.push(7);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    $("#bt_8").on("click", function() {
        query.push(8);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    $("#bt_9").on("click", function() {
        query.push(9);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    $("#bt_0").on("click", function() {
        query.push(0);
        console.log(query);
        $("#inputs").val(query.join(''));
    });

    //operation handling

    $("#bt_clear").on("click", function() { //clears the query and the input text area
        f = [];
        s = [];
        opflag = false;
        op = '';
        query = [];
        $("#inputs").val(query.join(''));
        console.log("query cleared");
    });

    $("#bt_sum").on("click", function() { //sum button click
        for (var i = 0; i < query.length; i++) { // runs through the query array searching for an existing operator
            if (isNaN(query[i])) {
                opflag = true; //turns operator flag to true if it finds something that is not a number
            }
        }
        if (opflag == false) { //if flag is false, pushes the operator into the query array
            query.push("+");
            console.log(query);
        } else {
            console.log("an operator is already in use"); //returns error if operator is already in use and does not add or remove anything from the query string
            console.log(query);
        }
        $("#inputs").val(query.join('')); //displays the joined query into the input
    });

    //same logic applies to the other operators
    $("#bt_sub").on("click", function() { //subtraction operator
        for (var i = 0; i < query.length; i++) {
            if (isNaN(query[i])) {
                opflag = true;
            }
        }
        if (opflag == false) {
            query.push("-");
            console.log(query);
        } else {
            console.log("an operator is already in use");
            console.log(query);
        }
        $("#inputs").val(query.join(''));
    });

    $("#bt_divi").on("click", function() { //division operator
        for (var i = 0; i < query.length; i++) {
            if (isNaN(query[i])) {
                opflag = true;
            }
        }
        if (opflag == false) {
            query.push("/");
            console.log(query);
        } else {
            console.log("an operator is already in use");
            console.log(query);
        }
        $("#inputs").val(query.join(''));
    });

    $("#bt_multi").on("click", function() { //multiplication operator
        for (var i = 0; i < query.length; i++) {
            if (isNaN(query[i])) {
                opflag = true;
            }
        }
        if (opflag == false) {
            query.push("*");
            console.log(query);
        } else {
            console.log("an operator is already in use");
            console.log(query);
        }
        $("#inputs").val(query.join(''));
    });

    //result handling
    $("#bt_result").on("click", function() {
        for (var i = 0; i < query.length; i++) {
            if (isNaN(query[i])) { //searches for the operator on the query array
                console.log("found operator " + query[i]);
                op = query[i]; //defines the operator
                for (var j = 0; j < i; j++) {
                    f.push(query[j]); // defines the first operand
                }
                console.log("first number: " + f.join(''));

                for (j = i + 1; j < query.length; j++) {
                    s.push(query[j]); // defines the second operand
                }
                console.log("second number: " + s.join(''));
            }
        }

        // check which operator is being used and does the operation accordingly ----
        if (op == "+") {
            result = parseInt(f.join('')) + parseInt(s.join(''));
        }
        if (op == "-") {
            result = parseInt(f.join('')) - parseInt(s.join(''));
        }
        if (op == "/") {
            result = parseFloat(f.join('')) / parseFloat(s.join(''));
        }
        if (op == "*") {
            result = parseInt(f.join('')) * parseInt(s.join(''));
        }
        //-------------------------------------------------------------------------------

        console.log("result: " + result);
        $("#inputs").val(query.join('') + " = " + result); //displays the result on the input area

        /* code for continuous operation, saves the result as the first operand and places onto the query (not yet implemented, gives error if uncommented)
        this code is left here as an idea, maybe i will implement it in the future
        f = ("" + result).split(''); 
        f = parseInt(f.join(''));
        */

        // clears the input area, the query and the operands -------
        f = [];
        s = [];
        opflag = false;
        op = '';
        query = [];
        console.log("query cleared");
        //-----------------------------------------------------
    });
});