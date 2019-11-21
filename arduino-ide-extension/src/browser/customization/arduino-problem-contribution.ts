import { inject, injectable } from 'inversify';
import { ProblemStat } from '@theia/markers/lib/browser/problem/problem-manager';
import { FrontendApplication } from '@theia/core/lib/browser/frontend-application';
import { ProblemContribution } from '@theia/markers/lib/browser/problem/problem-contribution';
import { EditorMode } from '../editor-mode';

@injectable()
export class ArduinoProblemContribution extends ProblemContribution {

    @inject(EditorMode)
    protected readonly editorMode: EditorMode;

    async initializeLayout(app: FrontendApplication): Promise<void> {
        if (this.editorMode.proMode) {
            return super.initializeLayout(app);
        }
    }

    protected setStatusBarElement(problemStat: ProblemStat): void {
        if (this.editorMode.proMode) {
            super.setStatusBarElement(problemStat);
        }
    }

}
