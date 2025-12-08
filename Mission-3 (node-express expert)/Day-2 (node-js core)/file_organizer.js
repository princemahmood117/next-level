const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy-files"); // creates a 'messy-files' folder inside 'output' folder

const organizedDir = path.join(__dirname, "output", "organizedFolder");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".svg"],
  documents: [".pdf", ".doc", ".txt", ".docx", ".pptx"],
  videos: [".avi", ".ts", ".mp4"],
  audio: [".mp3", ".avi"],
  code: [".html", ".css", ".js", ".cpp", ".py"],
  archives: [".gz", ".tar", ".rar", ".zip"],
  others: [],
};

const testFiles = [
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeDirectory() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`); // path.join(sourceDir, file) ==> creates a folder and adds file inside it. (EX : messy-files/report.pdf  )
    });
  }

  console.log("messy directory files are created!");

  // for organized directory
  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });


    
  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizedDir, category);

    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });

  }

  // Object.keys(categories).forEach((category) => {
  //   const categoryPath = path.join(organizedDir, category);

  //   if (!fs.existsSync(categoryPath)) {
  //     fs.mkdirSync(categoryPath);
  //   }
  // });
}

// category
function getCategory (fileName) {
    const exten = path.extname(fileName).toLowerCase()

    // images: [".jpg", ".jpeg", ".png", ".svg"],
    for(const [category, extensions] of Object.entries(categories)) {
        if(extensions.includes(exten)) {
            return category
        }
    }

    return 'others'
}

// initializeDirectory();

function organizeFiles(){
    console.log('source : ', sourceDir, '\n');
    console.log('organized directory : ', organizedDir);

    console.log('\n' + '-'.repeat(50) + '\n');

    const files = fs.readdirSync(sourceDir)
    if(files.length === 0) {
        console.log('no files to work on');
        return
    }

    console.log(`file found ${files.length} to organize \n` );

    const stats = {
        total : 0,
        byCategory  : {}
    }

    files.forEach((file) => {
        const sourcePath = path.join(sourceDir, file);
        const stat = fs.statSync(sourcePath);  // checking meta data

        if(stat.isDirectory()) {
            return
        }

        const category = getCategory(file)
        const destDir = path.join(organizedDir, category)
        const destPath = path.join(destDir, file)

        fs.copyFileSync(sourcePath, destPath)

        stats.total++;
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1

        console.log(`${file}`);
        console.log(`${category}`);
        console.log(`${stat.size}`);
    })
}


function showHelp() {
    console.log(`
        file organizer - usage : 

        commands : 
        init - create files
        organize - organize files into categories

        example : 
        node file_organizer init
        node file_organizer organize
        `);
}


const command = process.argv[2]
switch (command) {
    case 'init' :
        initializeDirectory()
        break;

    case 'organize' : 
        organizeFiles()
    break

    default:
        showHelp()
    break;
}

