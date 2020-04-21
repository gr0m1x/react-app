import React from "react"
import {createField, Input, Textarea} from "../../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import createFieldArray from "redux-form/lib/createFieldArray";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                Name: {createField("Name", "fullName", [], Input, {type: "text"})}
            </div>

            <div>
                Looking for a job:
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>

            <div>
                My professional skills:
                {createField("My professional skills...", "lookingForAJobDescription", [], Textarea, )}
            </div>

            <div>
                About me:
                {createField(" About me...", "aboutMe", [], Textarea, )}
            </div>
            <div>
                Contacts:
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <div className={"userContacts"} key={key}>
                            {key}:
                            {createField(key, "contacts." + key, [], Input)}
                        </div>
                    )
                })}
            </div>
            {error && <div className="error">{error}</div>}
            <div>
                <button>save</button>
            </div>

        </form>
    )

};

const ProfileReduxDataForm = reduxForm({
    form: "edit-profile"
})(ProfileDataForm);

export default ProfileReduxDataForm;