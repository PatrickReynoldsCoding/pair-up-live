import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './index.css';
import Button from '@mui/material/Button';
import ResponsiveAppBarLoggedOut from '../../../Components/ResponsiveAppBarLoggedOut';
import ResponsiveAppBarLoggedIn from '../../../Components/ResponsiveAppBarLoggedIn';

const submit = {
  minWidth: 100,
  minHeight: 50,
  bottom: -20,
  left: 0,
  fontSize: 20,
};

export default function NewProjectPage() {
  const { register, handleSubmit } = useForm();

  const addProjectToDb = async (createdProject) => {
    console.log(JSON.stringify(createdProject));
    let config = null;
    if (localStorage.getItem('token') !== null) {
      config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(createdProject),
      };
    }

    try {
      const res = await fetch(
        'http://localhost:8080/api/projects/createproject',
        config
      ).then((res) => {
        console.log(res);
        window.location = 'http://localhost:3000/project/home';
      });

      // const json = await res.json(); // not sure why this line is needed?
    } catch (err) {}
  };

  const submitForm = (data) => {
    addProjectToDb(data);
  };

  // //function to pull sessions userID to owner and users
  // const addUserIdToProject = () => {
  //   let userID = "62ebab3246601bb290812d9e" //replace with session function
  //   setProject({ ...user, owner: userID, users:[userID] });
  // }

  return (
    <>
      {localStorage.getItem('token') !== null ? (
        <ResponsiveAppBarLoggedIn />
      ) : (
        <ResponsiveAppBarLoggedOut />
      )}
      <div>
        <form class="content" onSubmit={handleSubmit(submitForm)}>
          <label>
            Name
            <input
              type="text"
              name="name"
              {...register('name', { required: true })}
            />
          </label>
          <label>
            Category
            <input
              type="text"
              name="category"
              {...register('category', { required: true })}
            />
          </label>
          <h3>Describe briefly what you are trying to build</h3>
          <div className="i">
            <textarea
              name="summary"
              {...register('summary', { required: true })}
            ></textarea>
          </div>
          <h3>How long do you think this project will take?</h3>
          <div className="i">
            <input
              type="radio"
              name="expectedProjectLength"
              value="<1 day"
              {...register('expectedProjectLength', { required: true })}
            />
            &lt;1 day
            <input
              type="radio"
              name="expectedProjectLength"
              value=">1 day"
              {...register('expectedProjectLength', { required: true })}
            />
            &gt;1 day
            <input
              type="radio"
              name="expectedProjectLength"
              value="2-3 days"
              {...register('expectedProjectLength', { required: true })}
            />
            2-3 days
            <input
              type="radio"
              name="expectedProjectLength"
              value="<1 week"
              {...register('expectedProjectLength', { required: true })}
            />
            &lt;1 week
            <input
              type="radio"
              name="expectedProjectLength"
              value=">1 week"
              {...register('expectedProjectLength', { required: true })}
            />
            &gt;1 week
            <input
              type="radio"
              name="expectedProjectLength"
              value="2-3 weeks"
              {...register('expectedProjectLength', { required: true })}
            />
            2-3 weeks
            <input
              type="radio"
              name="expectedProjectLength"
              value="Longer"
              {...register('expectedProjectLength', { required: true })}
            />
            Longer
          </div>
          <h3>How much of a commitment are you looking for from your team?</h3>
          <div className="h">
            <input
              type="radio"
              name="commitmentLevel"
              value="eh, whenever is good for them!"
              {...register('commitmentLevel', { required: true })}
            />
            eh, whenever is good for them!
            <input
              type="radio"
              name="commitmentLevel"
              value="maybe 1 session a week?"
              {...register('commitmentLevel', { required: true })}
            />
            maybe 1 session a week?
            <input
              type="radio"
              name="commitmentLevel"
              value="couple times a week preferably"
              {...register('commitmentLevel', { required: true })}
            />
            couple times a week preferably
          </div>
          <h3>How difficult do you think this project will be?</h3>
          <div className="h">
            <input
              type="radio"
              name="difficulty"
              value="Very Easy"
              {...register('difficulty', { required: true })}
            />
            Quite easy. A good beginner project for new coders just starting
            out.
            <input
              type="radio"
              name="difficulty"
              value="Easy"
              {...register('difficulty', { required: true })}
            />
            Not too tricky. But might be a challenge for absolute beginner.
            <input
              type="radio"
              name="difficulty"
              value="Intermediate"
              {...register('difficulty', { required: true })}
            />
            It will likely need people with a good understanding of their
            perfered language, who have built apps and websites previously.
            <input
              type="radio"
              name="difficulty"
              value="Hard"
              {...register('difficulty', { required: true })}
            />
            It will likely need people who have worked as coders before.
            <input
              type="radio"
              name="difficulty"
              value="Very Hard"
              {...register('difficulty', { required: true })}
            />
            It need very experienced professional coders.
            <input
              type="radio"
              name="difficulty"
              value="Master"
              {...register('difficulty', { required: true })}
            />
            It will require people looking to tackle the most severe problem
            solving.
          </div>
          <h3>How long do you want a pair-up session to be?</h3>
          <div className="h">
            <label>
              <input
                type="number"
                name="preferedSessionLength"
                min="1"
                max="8"
                {...register('preferedSessionLength', { required: true })}
              />
              (1 - 8 hours)
            </label>
          </div>
          <h3>
            Write the full details of what you want to achieve in this project:
          </h3>
          <div className="h">
            <textarea
              name="description"
              {...register('description', { required: true })}
            ></textarea>
            <br></br>
            <label>
              display your location?
              <input
                type="checkbox"
                name="displayLocation"
                value={true}
                {...register('displayLocation')}
              />
            </label>
          </div>
          <h3>
            How many additional people are you looking for to help you in this
            project
          </h3>
          <div className="h">
            <label>
              <input
                type="number"
                name="numberOfAdditionalUsersNeeded"
                min="1"
                max="5"
                {...register('numberOfAdditionalUsersNeeded', {
                  required: true,
                })}
              />
              (max 5)
            </label>
          </div>
          <h3>What skills are you looking for to help you on this project? </h3>
          {/* <i className="devicon-coffeescript-original" name="langWeNeed" value="coffeescript" type="checkbox" onClick={()=>{console.log("hello")}} {...register('langWeNeed')}></i> */}
          <div>
            <i className="devicon-bootstrap-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="bootstrap"
              {...register('langWeNeed')}
            />
          </div>
          <div>
            <i className="devicon-ruby-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="ruby"
              {...register('langWeNeed')}
            />
          </div>
          <div>
            <i className="devicon-javascript-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="javascript"
              {...register('langWeNeed')}
            />
          </div>
          <div>
            <i className="devicon-python-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="python"
              {...register('langWeNeed')}
            />
          </div>
          <div>
            <i className="devicon-java-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="java"
              {...register('langWeNeed')}
            />
          </div>
          <div>
            <i className="devicon-cplusplus-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="cplusplus"
              {...register('langWeNeed')}
            />
          </div>
          <div>
            <i className="devicon-typescript-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="typescript"
              {...register('langWeNeed')}
            />
          </div>
          <div>
            <i className="devicon-csharp-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="csharp"
              {...register('langWeNeed')}
            />
          </div>
          <div>
            <i className="devicon-docker-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="docker"
              {...register('langWeNeed')}
            />
          </div>
          <div>
            <i className="devicon-django-plain"></i>
            <br></br>
            <input
              type="checkbox"
              name="langWeNeed"
              value="django"
              {...register('langWeNeed')}
            />
          </div>
          {/* add more icons from https://devicon.dev/ */}
          <br></br>

          <textarea
            name="description"
            placeholder="other details"
            {...register('additionalSkillsNeeded')}
          />
          <div className="c">
            <Button
              style={submit}
              variant="contained"
              sx={{
                color: 'black',
                backgroundColor: '#b7bfe4',
                border: '2px black solid',
              }}
              className="btn btn-primary btn-bloack"
              type="submit"
              value="submit"
            >
              {' '}
              Submit{' '}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
