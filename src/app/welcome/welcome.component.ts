import { AppComponent } from './../app.component';
import { DataserviceService } from './../dataservice.service';
import { UserComponent } from './../user/user.component';
import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})



// const compx = ["0-zero","1-one","2-two"];
export class WelcomeComponent implements OnInit {

  //No of categories
  public noOfCategories: number = 6;

  // scenarios: string="";
  // public externalDepComplexity: String[] = ["Low","Medium","High"];

  //projType
  // projType: number = 0;

  //Requirement patterns
  reqComplex: number = 0;
  users: number = 0;
  scenarios: number = 0;

  //design
  designComplex: number = 0;
  lld: Number = 0;
  design: Number = 0;

  //coding patterns
  codingPractice: Number = 0;
  complexLogic: Number=0;
  knowledge: Number=0;
  timePressure: Number = 0;
  codeStatus: Number = 0;
  toolUsage: Number= 0;
  noOfDevs: Number = 0;
  codeMergeProcess: Number = 0;

  //Deploy patterns
  infraRequirements: Number = 0;
  infraTools: Number = 0;
  servers: Number = 0;

  //External dependencies
  externalDepComplexity: Number = 0;
  upDownSystems: Number = 0;

  //Maturity patterns
  patternsAvailability: Number = 0;
  matureDevPractice: Number = 0;
  matureTestPractice: Number = 0;

  public scoreSum: number = 0;
  public bugsCount: number = 0;
  public result: String = "";
  public formulaResult: number = 0;

  //Score
  pScore1: Number = 0;
  pScore2: Number = 0;
  pScore3: Number = 0;
  pScore4: Number = 0;
  pScore5: Number = 0;
  pScore6: Number = 0;

  //SS Sum
  pScore1SSsum: Number = 0;
  pScore2SSsum: Number = 0;
  pScore3SSsum: Number = 0;
  pScore4SSsum: Number = 0;
  pScore5SSsum: Number = 0;
  pScore6SSsum: Number = 0;


  //SS - Items
  pScore1SS: number = 2;
  pScore2SS: number = 2; 
  pScore3SS: number = 7; 
  pScore4SS: number = 2; 
  pScore5SS: number = 1; 
  pScore6SS: number = 2; 


  constructor(private service: DataserviceService,private app: AppComponent) { }

  ngOnInit() {
  }


  resetRequirements(){
    console.log("resetRequirements");
    this.scenarios = 0;
    this.users = 0;
  }

  resetDesigns(){
    console.log("reset designs");
    this.lld = 0;
    this.design = 0;
  }

  resetCodingPatterns(){
    console.log("reset coding pattrens");
    this.complexLogic = 0;
    this.knowledge = 0;
    this.timePressure = 0;
    this.codeStatus = 0;
    this.toolUsage = 0;
    this.noOfDevs = 0;
    this.codeMergeProcess = 0;
  }

  resetDeployPatterns(){
    this.infraTools = 0;
    this.servers = 0;
  }

  resetExternalDep(){
    this.upDownSystems = 0;
  }

  resetMaturityPatterns(){
    this.matureDevPractice = 0;
    this.matureTestPractice = 0;
  }
  submit(){
    console.log("----- User details ------");
    console.log("User name :"+this.app.userName);
    console.log("Project status :"+this.app.projectStatus);
    console.log("Project name :"+this.app.projectName);

    console.log("Project type :"+this.app.projType);

    //Requirement/ Behaviour
    console.log(" *** Requirement ***");
    console.log("Req complexity :"+this.reqComplex);
    console.log("Access to Users :"+this.users);
    console.log("Availability of scenarios :"+this.scenarios);

    //Design
    console.log(" *** Design ***");
    console.log("Design complex :"+ this.designComplex);
    console.log("Availability of LLD :"+this.lld);
    console.log("Proven design :"+this.design);

    //Coding
    console.log(" *** Coding ***");
    console.log("Usage of standards,frameworks :"+this.codingPractice);
    console.log("Comples logic :"+this.complexLogic);
    console.log("System knowledge :"+this.knowledge);
    console.log("Time pressure :"+this.timePressure);
    console.log("Code status:"+this.codeStatus);
    console.log("Tool usage :"+this.toolUsage);
    console.log("No of developers :"+this.noOfDevs);
    console.log("Code merge process :"+this.codeMergeProcess);

    //Deploy patterns
    console.log(" *** Deploy patterns ***");
    console.log("Infrastructure requirements :"+this.infraRequirements);
    console.log("Number of tools,config,setup :"+this.infraTools);
    console.log("Servers :"+this.servers);

    //External dependencies
    console.log(" *** External dependencies ***");
    console.log("External dependencies complex :"+this.externalDepComplexity);
    console.log("No of upstream, downstream :"+this.upDownSystems);

    //Maturity patterns
    console.log(" *** Maturity patterns ***");
    console.log("Availability of plans :"+this.patternsAvailability);
    console.log("Mature dev practices :"+this.matureDevPractice);
    console.log("Mature test practices :"+this.matureTestPractice);


    //check
    if(+this.reqComplex === 0){
      console.log("***********reqComplex not selected");
      this.scenarios == 0;
      console.log("scenario value"+this.scenarios);
    }


    this.scoreSum = +this.app.projType + 
    +this.reqComplex + 
    +this.users + +this.scenarios +
    +this.designComplex + +this.lld + +this.design +
    +this.codingPractice + +this.complexLogic + +this.knowledge + +this.timePressure +
    +this.codeStatus + +this.toolUsage + +this.noOfDevs + +this.codeMergeProcess +
    +this.infraRequirements + +this.infraTools + +this.servers +
    +this.externalDepComplexity + +this.upDownSystems +
    +this.patternsAvailability + +this.matureDevPractice + +this.matureTestPractice;


    //set pScore
    this.pScore1 = this.app.projType;

    this.pScore1 = this.reqComplex;
    this.pScore2 = this.designComplex;
    this.pScore3 = this.codingPractice;
    this.pScore4 = this.infraRequirements;
    this.pScore5 = this.externalDepComplexity;
    this.pScore6 = this.patternsAvailability;


    //SS sum
    this.pScore1SSsum = +this.users + +this.scenarios;
    this.pScore2SSsum = +this.lld + +this.design;
    this.pScore3SSsum = +this.complexLogic + +this.knowledge + +this.timePressure +
                        +this.codeStatus + +this.toolUsage + +this.noOfDevs + +this.codeMergeProcess;

    this.pScore4SSsum = +this.infraTools + +this.servers;
    this.pScore5SSsum = +this.upDownSystems;
    this.pScore6SSsum = +this.matureDevPractice + +this.matureTestPractice;



    this.formulaResult = (this.app.noOfRequirements * this.noOfCategories) *
                    (
                      (+this.pScore1 * (+this.pScore1SSsum / (3*2))) +
                      (+this.pScore2 * (+this.pScore2SSsum / (3*2))) +
                      (+this.pScore3 * (+this.pScore3SSsum / (3*7))) +
                      (+this.pScore4 * (+this.pScore4SSsum / (3*2))) +
                      (+this.pScore5 * (+this.pScore5SSsum / (3*1))) +
                      (+this.pScore6 * (+this.pScore6SSsum / (3*2))) 
                    );



    console.log("Score sum :"+this.scoreSum);
    this.bugsCount =  (this.app.noOfRequirements * this.noOfCategories ) * this.scoreSum;

    // console.log("BUGS ---> "+this.bugsCount);

    console.log(" New Result :"+this.formulaResult);
    this.bugsCount = Math.round(this.formulaResult);
    // this.bugsCount = this.formulaResult;


    window.scrollTo(0,0);

  }
}
