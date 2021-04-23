/**
 * @desc this is function component which will return the MCQ options .
 * @author Manav Sharma
 * @since 21 April 2021
*/

import React from 'react';

export default({
    optionsArray,
    answerHandler
}) => {
    const updatedOptions = [];

    if (optionsArray) {


        let optionsArrayLength = optionsArray.length;
        let i = 0;
        for ( ; i < optionsArrayLength; i++){
             updatedOptions.push(
                    <div onClick= {answerHandler}>
                        <input type="radio" id={decodeURIComponent(optionsArray[i])} name="options" value=
                        {decodeURIComponent(optionsArray[i])}/>
                        <label for="option">
                        {decodeURIComponent(optionsArray[i])}</label>
                    </div>
            );
        }
        // optionsArray.forEach((element) => {
        //    updatedOptions.push(
        //             <div onClick= {answerHandler}>
        //                 <input type="radio" id={decodeURIComponent(element)} name="options" value=
        //                 {decodeURIComponent(element)}/>
        //                 <label for="option">
        //                 {decodeURIComponent(element)}</label>
        //             </div>
        //     );
        // });

    }
    return (
        <div onClick= {answerHandler}>
            {updatedOptions}
        </div>
    );
};