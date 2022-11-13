// set 1
import jiraSvg from '../../../images/services-icons/jira-svg.svg';
import wikiSvg from '../../../images/services-icons/wiki.svg';
import bitBucketSvg from '../../../images/services-icons/bitbucket.svg';
// set 2
import sonarSourceSvg from '../../../images/services-icons/sonar-source-svg.svg';
import vaultSvg from '../../../images/services-icons/vault-svg.svg';
import appStorePng from '../../../images/services-icons/appstore-services-wubg.png';
// set 3
import nexusPng from '../../../images/services-icons/nexus-icon.png';
import nexusIqSvg from '../../../images/services-icons/nexus-iq-svg.svg';
import bambooPng from '../../../images/services-icons/bamboo-icon.png';
// set 4
import pipelinePng from '../../../images/services-icons/pipeline-icon.png';
import argoWorkflowsPng from '../../../images/services-icons/argo-workflows.png';
import openShiftSvg from '../../../images/services-icons/openshift-service.svg';

const sharedStyles = {
    imgDivStyles: { display: 'flex', placeSelf: 'center' },
    h1DivStyles: { display: 'flex', placeSelf: 'center' },
    pDivStyles: { display: 'flex', placeSelf: 'center' },
    imgStyles: { maxHeight: '150px', maxWidth: '150px', height: '100%', width: '100%' },
    h1Styles: { color: 'black' },
    pStyles: { color: 'black', textAlign: 'center', padding: '10px' },
};

export const services = [
    [
        {
            src: jiraSvg,
            p: 'Deliver value to your users faster using proven agile tools to plan, track, ans discuss work across your teams.',
            h1: 'DevOps Boards',
            imgDivStyles: {},
            h1DivStyles: { display: 'flex', placeSelf: 'center' },
            pDivStyles: { display: 'flex', placeSelf: 'center' },
            imgStyles: { minHeight: '100px', minWidth: '100px', height: '100%', width: '100%' },
            h1Styles: { color: 'black' },
            pStyles: { color: 'black', textAlign: 'center', padding: '10px' },
        },
        {
            src: wikiSvg,
            p: 'Get Team/Project Workspace Where Knowledge and Collaboration Meet. serving as the starting point for finding critical information throughout your organization.',
            h1: 'DevOps Wiki',
            ...sharedStyles,
        },
        {
            src: bitBucketSvg,
            p: 'Get unlimited, cloud-hosted private Git repositories and collaborate to build better code with pull requests and advanced file management.',
            h1: 'DevOps Repos',
            ...sharedStyles,
        },
    ],
    [
        {
            src: sonarSourceSvg,
            p: 'SonarQube is universal tool for static code analysis that has become more or less the industry standard. Keeping code clean, simple, and easy to read is also a lot easier with SonarQube.',
            h1: 'DevOps Code Scan',
            ...sharedStyles,
        },
        {
            src: vaultSvg,
            p: 'Securely Share App secrets through deployment environments with 100% integration with pipelines services.',
            h1: 'DevOps Secrets',
            ...sharedStyles,
        },
        {
            src: appStorePng,
            p: 'catalog service which will enable the search and discovery of corporate deployment libraries(helm charts), Kubernetes-ready apps.',
            h1: 'DevOps AppStore',
            ...sharedStyles,
        },
    ],
    [
        {
            src: nexusPng,
            p: 'Single source of Truth for all your apps binaries, and build artifacts. Create, Host, and Share packages with your team, and add artifacts to your CI/CD pipelines with a single click.',
            h1: 'DevOps Artifacts',
            ...sharedStyles,
        },
        {
            src: nexusIqSvg,
            p: "Sonatype's policy engine powered by precise intelligence on open source components.it provides a number of tools to improve component usage in your software supply chain, allowing you to automate your processes and achieve accelerated speed to delivery while also increasing product quality.",
            // SCA => Software Composition Analysis
            h1: 'DevOps SCA',
            ...sharedStyles,
        },
        {
            src: bambooPng,
            p: 'Build your first continuous integration and continuous delivery pipeline with Bamboo, a CI server that can be used to automate the build, test, and release management for software application, creating a continuous delivery pipeline.',
            h1: 'DevOps CI',
            ...sharedStyles,
        },
    ],
    [
        {
            src: pipelinePng,
            p: 'Orchestrate the phases of software delivery till reaching end users while providing the ability to inject quality gates in between.',
            h1: 'DevOps Pipelines',
            ...sharedStyles,
        },
        {
            src: argoWorkflowsPng,
            p: 'Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on kubernetes.',
            h1: 'DevOps CD',
            ...sharedStyles,
        },
        {
            src: openShiftSvg,
            p: 'Red Hat OpenShift is enterprise-ready Kubernetes container platform built for an open hybrid cloud strategy. It provides a consistent application platform to manage hybrid cloud, multicloud, and edge deployments.',
            h1: 'DevOps Openshift',
            ...sharedStyles,
        },
    ],
];
